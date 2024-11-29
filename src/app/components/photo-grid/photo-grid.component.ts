import { CommonModule } from "@angular/common";
import {
    Component,
    ChangeDetectionStrategy,
    ViewEncapsulation,
    OnInit,
    ChangeDetectorRef,
    HostListener,
} from "@angular/core";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { PhotoDto } from "@photoLibrary/dto";
import { PhotoService } from "@photoLibrary/services";

@Component({
    selector: "app-photo-grid",
    templateUrl: "./photo-grid.component.html",
    styleUrls: ["./photo-grid.component.scss"],
    standalone: true,
    imports: [
        CommonModule,
        MatGridListModule,
        MatCardModule,
        MatProgressSpinnerModule,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class PhotoGridComponent implements OnInit {
    photos: PhotoDto[] = [];
    isLoading = false;
    private scrollTimeout!: ReturnType<typeof setTimeout>;
    private maxPhotos = 300; // Limit for photos to prevent infinite fetches
    private totalPhotosFetched = 0; // Tracks how many photos have been fetched

    constructor(
        private _photoService: PhotoService,
        private _cd: ChangeDetectorRef
    ) {}

    ngOnInit(): void {
        console.log("Initializing PhotoGridComponent...");
        this._loadPhotos(); // Load initial photos on component initialization
    }

    // Simulates an API delay
    private async _simulateLoadingDelay(): Promise<void> {
        console.log("Simulating delay...");
        return new Promise((resolve) => setTimeout(resolve, 1000)); // 1-second delay
    }

    // Loads photos from the service
    private async _loadPhotos(): Promise<void> {
        if (this.isLoading || this.totalPhotosFetched >= this.maxPhotos) {
            console.log(
                "Cannot load photos: Either already loading or max photos reached."
            );
            return;
        }

        this.isLoading = true;
        console.log("Spinner visibility (before load):", this.isLoading);
        this._cd.detectChanges();

        console.log("Loading started, spinner should be visible.");
        try {
            await this._simulateLoadingDelay(); // Simulate server delay
            const newPhotos = this._photoService.getRandomPhotos(6); // Fetch 6 new photos
            this.totalPhotosFetched += newPhotos.length;
            console.log("New photos fetched:", newPhotos);

            this.photos = [...this.photos, ...newPhotos]; // Append new photos to the list
            console.log(
                "Updated photos array for grid rendering:",
                this.photos
            );
        } finally {
            this.isLoading = false;
            console.log("Spinner visibility (after load):", this.isLoading);
            this._cd.detectChanges();
            console.log("Loading finished, spinner should disappear.");
        }
    }

    // Checks if the user has scrolled near the bottom
    private _isScrollAtBottom(): boolean {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;

        console.log("Scroll position data:", {
            scrollHeight,
            scrollTop,
            clientHeight,
        });
        return scrollTop + clientHeight >= scrollHeight - 10;
    }

    // Detects scrolling and triggers loading of more photos
    @HostListener("window:scroll", ["$event"])
    onScroll(event: Event): void {
        console.log("Scroll event triggered:", event);

        clearTimeout(this.scrollTimeout); // Clear any previous timeout
        this.scrollTimeout = setTimeout(() => {
            if (this._isScrollAtBottom() && !this.isLoading) {
                console.log(
                    "Scroll detected near the bottom. Loading more photos..."
                );
                this._loadPhotos(); // Load more photos
            }
        }, 200); // Debounce the scroll event
    }
}
