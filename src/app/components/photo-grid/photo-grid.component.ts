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
import { PhotoDto } from "@photoLibrary/dto";
import { PhotoService } from "@photoLibrary/services";
import { LoadingSpinnerComponent } from "@photoLibrary/shared";

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
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class PhotoGridComponent implements OnInit, AfterViewInit, OnDestroy {
    private _observer!: IntersectionObserver;
    private _maxPhotos = 300;
    private _totalPhotosFetched = 0;

    @ViewChild("scrollAnchor", { static: true }) scrollAnchor!: ElementRef;

    photos: PhotoDto[] = [];
    isLoading = false;

    constructor(
        private _photoService: PhotoService,
        private _cd: ChangeDetectorRef
    ) {}

    ngOnInit(): void {
        this._loadInitialPhotos();
    }

    ngAfterViewInit(): void {
        this._initializeIntersectionObserver();
    }

    ngOnDestroy(): void {
        if (this._observer) {
            this._observer.disconnect();
        }
    }

    private _initializeIntersectionObserver(): void {
        this._observer = new IntersectionObserver(
            (entries) => {
                const target = entries[0];
                if (target.isIntersecting && !this.isLoading) {
                    this._loadMorePhotos();
                }
            },
            { threshold: 1.0 } // Trigger only when fully in view
        );

        this._observer.observe(this.scrollAnchor.nativeElement);
    }

    private _loadInitialPhotos(): void {
        this._loadPhotos(6); // Load 6 photos initially
    }

    private _loadMorePhotos(): void {
        if (this._totalPhotosFetched >= this._maxPhotos) return; // Stop fetching if max photos reached
        this._loadPhotos(6); // Load 6 photos per trigger
    }

    private async _loadPhotos(count: number): Promise<void> {
        if (this.isLoading) return; // Prevent redundant calls
        this.isLoading = true;
        this._cd.detectChanges();

        try {
            const newPhotos = this._photoService.getRandomPhotos(count);
            this.photos = [...this.photos, ...newPhotos];
            this._totalPhotosFetched += newPhotos.length;
        } catch (error) {
            console.error("Failed to load photos:", error);
        } finally {
            this.isLoading = false;
            this._cd.detectChanges(); // Update UI after loading
        }
    }
}
