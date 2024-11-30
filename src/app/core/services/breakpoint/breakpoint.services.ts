import { Injectable, HostListener } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class BreakpointService {
    private _breakpointSubject: BehaviorSubject<number> =
        new BehaviorSubject<number>(3);

    constructor() {
        this.updateBreakpoint(window.innerWidth);
    }

    // Method to update the breakpoint value based on the window width
    private updateBreakpoint(width: number): void {
        const breakpoint = width <= 650 ? 1 : width <= 900 ? 2 : 3;
        this._breakpointSubject.next(breakpoint);
    }

    // Expose the observable for components to subscribe to
    getBreakpoint() {
        return this._breakpointSubject.asObservable();
    }

    // Update the breakpoint on window resize
    @HostListener("window:resize", ["$event"])
    onResize(event: Event) {
        this.updateBreakpoint((event.target as Window).innerWidth);
    }
}
