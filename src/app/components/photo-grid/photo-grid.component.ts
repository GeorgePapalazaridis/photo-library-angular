import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
    selector: "app-photo-grid",
    standalone: true,
    templateUrl: "./photo-grid.component.html",
    styleUrls: ["./photo-grid.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoGridComponent {}
