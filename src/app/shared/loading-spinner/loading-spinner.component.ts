import {
    ChangeDetectionStrategy,
    Component,
    ViewEncapsulation,
} from "@angular/core";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { CommonModule } from "@angular/common";

@Component({
    selector: "app-loading-spinner",
    template: `
        <div class="spinner-container">
            <mat-spinner color="primary" />
        </div>
    `,
    standalone: true,
    imports: [MatProgressSpinnerModule, CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class LoadingSpinnerComponent {}
