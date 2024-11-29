import { CommonModule } from "@angular/common";
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnInit,
    ViewEncapsulation,
} from "@angular/core";
import { PhotoDto } from "@photoLibrary/dto";
import { FavoritesService } from "@photoLibrary/services";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

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
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class FavoritesComponent implements OnInit {
    favorites: PhotoDto[] = [];

    constructor(
        private _favoritesService: FavoritesService,
        private _cd: ChangeDetectorRef
    ) {}

    ngOnInit(): void {
        console.log("FavoritesComponent initialized.");
        // this.loadFavorites();

        // Temporary test data, ToDo: Remove
        this.favorites = [
            { url: "https://picsum.photos/id/1/300/200", title: "Photo 1" },
            { url: "https://picsum.photos/id/2/300/200", title: "Photo 2" },
            { url: "https://picsum.photos/id/3/300/200", title: "Photo 3" },
        ];
    }

    loadFavorites(): void {
        this.favorites = this._favoritesService.getFavorites();
        this._cd.detectChanges();
    }

    removeFavorite(photoId: string): void {
        this._favoritesService.removeFromFavorites(photoId);
        this.loadFavorites();
    }
}
