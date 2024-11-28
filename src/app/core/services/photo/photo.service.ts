import { Injectable } from "@angular/core";
import { PhotoDto } from "@photoLibrary/dto";

/**
 * PhotoService
 * This service simulates fetching random photos from an external API.
 * It generates an array of mock photo objects with unique URLs and titles.
 * Note: In a real-world scenario, this would involve HTTP requests to fetch data from a backend server.
 */

@Injectable({
    providedIn: "root",
})
export class PhotoService {
    private readonly BASE_URL = "https://picsum.photos/300";

    getRandomPhotos(count: number): PhotoDto[] {
        const photos: PhotoDto[] = [];
        for (let i = 1; i <= count; i++) {
            photos.push({
                url: `${this.BASE_URL}?random=${i}`,
                title: `Photo ${i}`,
            });
        }
        return photos;
    }
}
