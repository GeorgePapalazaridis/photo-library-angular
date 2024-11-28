import { CommonModule } from "@angular/common";
import {
    Component,
    ChangeDetectionStrategy,
    ViewEncapsulation,
} from "@angular/core";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

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
export class PhotoGridComponent {
    photos = [
        { url: "https://picsum.photos/300?random=1", title: "Photo 1" },
        { url: "https://picsum.photos/300?random=2", title: "Photo 2" },
        { url: "https://picsum.photos/300?random=3", title: "Photo 3" },
    ];
    isLoading = false;
}
