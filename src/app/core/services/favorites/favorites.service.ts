import { Injectable } from "@angular/core";
import { PhotoDto } from "@photoLibrary/dto";
import { LocalStorageService } from "../local-storage/local-storage.service";

@Injectable({
    providedIn: "root",
})
export class FavoritesService {
    private readonly _favoritesKey = "favorites";

    constructor(private _localStorageService: LocalStorageService) {}

    getFavorites(): PhotoDto[] {
        try {
            const favorites = this._localStorageService.getItem<PhotoDto[]>(
                this._favoritesKey || []
            );
            return favorites;
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
                this._localStorageService.setItem(
                    this._favoritesKey,
                    favorites
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
            this._localStorageService.setItem(
                this._favoritesKey,
                updatedFavorites
            );
        } catch (error) {
            console.error("Failed to remove photo from favorites:", error);
        }
    }
}
