import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PicsumPhotoDto } from "@photoLibrary/dto";
import { Photo } from "@photoLibrary/interfaces";
import { catchError, map, Observable, throwError } from "rxjs";
import { environment } from "src/environments/environment";

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
    private readonly BASE_URL = environment.BASE_URL; // From environment file
    private readonly IMAGE_BASE_URL = environment.IMAGE_BASE_URL; // From environment file

    constructor(private _http: HttpClient) {}

    getRandomPhotos(count: number = 3): Observable<Photo[]> {
        const randomPage = Math.floor(Math.random() * 100) + 1; // Assuming 100 pages exist
        const url = `${this.BASE_URL}?page=${randomPage}&limit=${count}`;

        return this._http.get<PicsumPhotoDto[]>(url).pipe(
            map((photos) =>
                photos.map((photo, index) => ({
                    id: photo.id,
                    url: `${this.IMAGE_BASE_URL}/id/${photo.id}/300/200?random=${index}`, // Use specific ID and size
                    title: photo.author,
                }))
            ),
            catchError((error) => {
                console.error("Error fetching photos", error);
                throwError(()=>"Error fetching photos");
                return [];
            })
        );
    }
}
