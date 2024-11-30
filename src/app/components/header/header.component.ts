import { CommonModule } from "@angular/common";
import {
    ChangeDetectionStrategy,
    Component,
    ViewEncapsulation,
} from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
    standalone: true,
    imports: [CommonModule, RouterModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {}
