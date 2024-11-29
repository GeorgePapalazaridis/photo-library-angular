import { Injectable } from "@angular/core";
import { PhotoDto } from "@photoLibrary/dto";

@Injectable({
    providedIn: "root",
})
export class FavoritesService {
    private readonly _favoritesKey = "favorites";

    constructor() {}

    getFavorites(): PhotoDto[] {
        const favorites = localStorage.getItem(this._favoritesKey);
        const parsedFavorites = JSON.parse(favorites || "[]");

        return parsedFavorites;
    }

    addToFavorites(photo: PhotoDto): void {
        const favorites = this.getFavorites();

        if (!favorites.find((item) => item.id === photo.id)) {
            favorites.push(photo);

            localStorage.setItem(this._favoritesKey, JSON.stringify(favorites));
        }
    }

    removeFromFavorites(photoId: string): void {
        const favorites = this.getFavorites();
        const updateFavorites = favorites.filter((item) => item.id !== photoId);
        localStorage.setItem(
            this._favoritesKey,
            JSON.stringify(updateFavorites)
        );
    }
}
