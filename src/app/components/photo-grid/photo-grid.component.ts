import { CommonModule } from "@angular/common";
import {
    Component,
    ChangeDetectionStrategy,
    ViewEncapsulation,
    OnInit,
    ChangeDetectorRef,
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

    constructor(
        private _photoService: PhotoService,
        private _cd: ChangeDetectorRef
    ) {}

    ngOnInit(): void {
        this._loadPhotos();
    }

    private _loadPhotos(): void {
        this.isLoading = true;
        this._cd.detectChanges();

        const delay = Math.random() * 100 + 200;

        setTimeout(() => {
            try {
                this.photos = this._photoService.getRandomPhotos(6);
            } catch (err) {
                console.error("Failed to load photos:", err);
                this.photos = [];
            } finally {
                this.isLoading = false;
                this._cd.detectChanges();
            }
        }, delay);
    }
}
