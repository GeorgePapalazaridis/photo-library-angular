import { CommonModule } from "@angular/common";
import {
    Component,
    ChangeDetectionStrategy,
    ViewEncapsulation,
    OnInit,
} from "@angular/core";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { PhotoDto } from "@photoLibrary/dto";
import { PhotoService } from "@photoLibrary/services";

@Component({
    selector: "app-photo-grid",
    standalone: true,
    templateUrl: "./photo-grid.component.html",
    styleUrls: ["./photo-grid.component.scss"],
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

    constructor(private _photoService: PhotoService) {}

    ngOnInit(): void {
        this._loadPhotos();
    }

    private _loadPhotos(): void {
        this.isLoading = true;

        try {
            this.photos = this._photoService.getRandomPhotos(10);
        } catch (err) {
            console.error("Failed to load photos:", err);
            this.photos = [];
        } finally {
            this.isLoading = false;
        }
    }
}
