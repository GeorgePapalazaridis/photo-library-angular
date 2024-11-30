import { Injectable } from "@angular/core";
import { PhotoDto } from "@photoLibrary/dto";

@Injectable({
    providedIn: "root",
})
export class FavoritesService {
    private readonly _favoritesKey = "favorites";

    constructor() {}

    getFavorites(): PhotoDto[] {
        try {
            const favorites = localStorage.getItem(this._favoritesKey);
            const parsedFavorites = JSON.parse(favorites || "[]");
            return parsedFavorites;
        } catch (error) {
            console.error("Failed to get favorites from localStorage:", error);
            return [];
        }
    }

    addToFavorites(photo: PhotoDto): void {
        try {
            const favorites = this.getFavorites();

            if (!favorites.find((item) => item.id === photo.id)) {
                favorites.push(photo);
                localStorage.setItem(
                    this._favoritesKey,
                    JSON.stringify(favorites)
                );
            }
        } catch (error) {
            console.error("Failed to add photo to favorites:", error);
        }
    }

    removeFromFavorites(photoId: string): void {
        try {
            const favorites = this.getFavorites();
            const updatedFavorites = favorites.filter(
                (item) => item.id !== photoId
            );
            localStorage.setItem(
                this._favoritesKey,
                JSON.stringify(updatedFavorites)
            );
        } catch (error) {
            console.error("Failed to remove photo from favorites:", error);
        }
    }
}
