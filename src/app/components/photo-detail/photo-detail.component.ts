import { CommonModule } from "@angular/common";
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnInit,
    ViewEncapsulation,
} from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { ActivatedRoute, Router } from "@angular/router";
import { PhotoDto } from "@photoLibrary/dto";
import { FavoritesService } from "@photoLibrary/services";

@Component({
    selector: "app-photo-detail",
    templateUrl: "./photo-detail.component.html",
    styleUrls: ["./photo-detail.component.scss"],
    standalone: true,
    imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class PhotoDetailComponent implements OnInit {
    photo!: PhotoDto;

    constructor(
        private _route: ActivatedRoute,
        private _favoritesService: FavoritesService,
        private _router: Router,
        private _cd: ChangeDetectorRef
    ) {}

    ngOnInit(): void {
        const photoId = this._route.snapshot.paramMap.get("id");
        if (photoId) {
            this.loadPhoto(photoId);
        }
    }

    loadPhoto(id: string): void {
        const favorites = this._favoritesService.getFavorites();
        const foundPhoto = favorites.find((p) => p.id === id!);
        if (foundPhoto) {
            this.photo = foundPhoto;
        } else {
            throw new Error(`Photo with ID ${id} not found.`);
        }
    }

    removeFromFavorites(): void {
        this._favoritesService.removeFromFavorites(this.photo.id);
        this._cd.detectChanges();
        this._router.navigate(["/favorites"]);
    }
}
