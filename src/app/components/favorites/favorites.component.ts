import { CommonModule } from "@angular/common";
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    ViewEncapsulation,
} from "@angular/core";
import { BreakpointService, FavoritesService } from "@photoLibrary/services";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from "@angular/router";
import { Subscription } from "rxjs";
import { Photo } from "@photoLibrary/interfaces";

@Component({
    selector: "app-favorites",
    templateUrl: "./favorites.component.html",
    styleUrls: ["./favorites.component.scss"],
    standalone: true,
    imports: [
        CommonModule,
        MatGridListModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        RouterModule,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class FavoritesComponent implements OnInit, OnDestroy {
    private _breakpointSubscription!: Subscription;

    favorites: Photo[] = [];
    breakpoint: number = 3;

    constructor(
        private _favoritesService: FavoritesService,
        private _cd: ChangeDetectorRef,
        public breakpointService: BreakpointService
    ) {}

    ngOnInit(): void {
        console.log("FavoritesComponent initialized.");
        this.loadFavorites();

        // Subscribe to the breakpoint changes
        this._breakpointSubscription = this.breakpointService
            .getBreakpoint()
            .subscribe((breakpoint) => {
                this.breakpoint = breakpoint;
            });
    }

    ngOnDestroy(): void {
        if (this._breakpointSubscription) {
            this._breakpointSubscription.unsubscribe();
        }
    }

    loadFavorites(): void {
        this.favorites = this._favoritesService.getFavorites();
        // Use the ID to get the correct image URL
        this.favorites.forEach((favorite) => {
            // Fetch photo using the ID from Picsum
            const url = `https://picsum.photos/id/${favorite.id}/300/200`;
            favorite.url = url;
        });
        this._cd.detectChanges();
    }

    removeFavorite(photoId: string): void {
        this._favoritesService.removeFromFavorites(photoId);
        this.loadFavorites();
    }
}
