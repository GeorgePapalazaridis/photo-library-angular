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
    private readonly BASE_URL = "https://picsum.photos/id"; // Endpoint for fetching by ID

    getRandomPhotos(count: number = 3): PhotoDto[] {
        console.log(`Fetching ${count} random photos...`);
        const photos: PhotoDto[] = [];

        // Get random numbers for photo IDs (you can modify this to use a range or API if needed)
        const randomPhotoIds = Array.from({ length: count }, () =>
            Math.floor(Math.random() * 1000)
        ); // Assuming 1000 images

        randomPhotoIds.forEach((photoId, index) => {
            photos.push({
                id: photoId.toString(),
                url: `${this.BASE_URL}/${photoId}/300/200`, // URL format for Picsum
                title: `Photo ${index + 1}`,
            });
        });

        console.log("Generated photos:", photos);
        return photos;
    }
}
