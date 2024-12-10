import { CommonModule } from "@angular/common";
import {
    Component,
    ChangeDetectionStrategy,
    ViewEncapsulation,
    OnInit,
    ChangeDetectorRef,
    ViewChild,
    ElementRef,
    AfterViewInit,
    OnDestroy,
} from "@angular/core";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import {
    BreakpointService,
    FavoritesService,
    PhotoService,
} from "@photoLibrary/services";
import { LoadingSpinnerComponent } from "@photoLibrary/shared";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { Subscription } from "rxjs";
import { Photo } from "@photoLibrary/interfaces";

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
        LoadingSpinnerComponent,
        MatIconModule,
        MatButtonModule,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class PhotoGridComponent implements OnInit, AfterViewInit, OnDestroy {
    private _breakpointSubscription!: Subscription;

    private _observer!: IntersectionObserver;
    private _maxPhotos = 300;
    private _totalPhotosFetched = 0;

    @ViewChild("scrollAnchor", { static: true }) scrollAnchor!: ElementRef;

    photos: Photo[] = [];
    isLoading: boolean = false;
    breakpoint: number = 3;

    constructor(
        private _photoService: PhotoService,
        private _favoritesService: FavoritesService,
        private _cd: ChangeDetectorRef,
        public breakpointService: BreakpointService
    ) {}

    ngOnInit(): void {
        console.log("PhotoGridComponent initialized.");
        this._loadInitialPhotos();

        // Subscribe to the breakpoint changes
        this._breakpointSubscription = this.breakpointService
            .getBreakpoint()
            .subscribe((breakpoint) => {
                this.breakpoint = breakpoint;
            });
    }

    ngAfterViewInit(): void {
        console.log("Setting up IntersectionObserver...");
        this._initializeIntersectionObserver();
    }

    ngOnDestroy(): void {
        if (this._observer) {
            console.log("[INFO] Disconnecting IntersectionObserver...");
            this._observer.disconnect();
        }

        if (this._breakpointSubscription) {
            this._breakpointSubscription.unsubscribe();
        }
    }

    toggleFavorite(photo: Photo): void {
        console.log("Toggling favorite for photo:", photo); // for debugging

        if (this.isFavorite(photo)) {
            this._favoritesService.removeFromFavorites(photo.id);
        } else {
            console.log("Adding to favorites:", photo); // for debugging
            this._favoritesService.addToFavorites(photo);
        }
    }

    isFavorite(photo: Photo): boolean {
        return this._favoritesService
            .getFavorites()
            .some((favorite) => favorite.id === photo.id);
    }

    private _initializeIntersectionObserver(): void {
        if (!this.scrollAnchor) {
            console.error("Scroll anchor element not found!");
            return;
        }

        this._observer = new IntersectionObserver(
            (entries) => {
                const target = entries[0];
                console.log("IntersectionObserver entry:", target); // for debugging

                if (target.isIntersecting && !this.isLoading) {
                    console.log(
                        "Scroll anchor is intersecting. Loading more photos..."
                    );
                    this._loadMorePhotos();
                }
            },
            { threshold: 0.5 } // Trigger only when fully visible
        );

        this._observer.observe(this.scrollAnchor.nativeElement);
        console.log("Observer initialized and observing the scroll anchor..."); // for debugging
    }

    private _loadInitialPhotos(): void {
        console.log("Loading initial photos..."); // for debugging
        this._loadPhotos(6); // Load 6 photos initially
    }

    private _loadMorePhotos(): void {
        console.log("Attempting to load more photos..."); // for debugging
        if (this._totalPhotosFetched >= this._maxPhotos) {
            console.warn(
                "Reached the maximum number of photos. No more loading."
            );
            return;
        }
        this._loadPhotos(6); // Load 6 photos per trigger
    }

    private async _loadPhotos(count: number): Promise<void> {
        if (this.isLoading) return; // Prevent redundant calls
        this.isLoading = true;
        this._cd.detectChanges();

        try {
            console.log("Starting to load photos...");
            await this._simulateServerDelay(); // Simulate server delay

            console.log(`Fetching ${count} random photos...`); // for debugging
            this._photoService.getRandomPhotos(count).subscribe((newPhotos) => {
                this.photos = [...this.photos, ...newPhotos];
                this._totalPhotosFetched += newPhotos.length;

                console.log("Loaded photos:", newPhotos); // for debugging
                console.log(
                    `Total photos fetched: ${this._totalPhotosFetched}`
                ); // for debugging
            });

            // Reconnect the observer to recheck the scroll anchor
            if (this.scrollAnchor && this._observer) {
                console.log("Reconnecting IntersectionObserver..."); // for debugging
                this._observer.unobserve(this.scrollAnchor.nativeElement);
                this._observer.observe(this.scrollAnchor.nativeElement);
            }
        } catch (error) {
            console.error("Error while loading photos:", error);
        } finally {
            console.log("Finished loading photos."); // for debugging
            this.isLoading = false;
            this._cd.detectChanges();
        }
    }

    private _simulateServerDelay(): Promise<void> {
        const delay = Math.floor(Math.random() * (300 - 200 + 1)) + 200;
        console.log(`Simulating a delay of ${delay}ms...`); // for debugging
        return new Promise((resolve) => setTimeout(resolve, delay));
    }
}
