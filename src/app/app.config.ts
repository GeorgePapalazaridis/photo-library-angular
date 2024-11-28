import { ApplicationConfig } from "@angular/core";
import { provideRouter, Routes } from "@angular/router";
import { PhotoGridComponent } from "./components/photo-grid/photo-grid.component";

export const routes: Routes = [
    { path: "", redirectTo: "/photos", pathMatch: "full" },
    { path: "photos", component: PhotoGridComponent },
    { path: "**", redirectTo: "/photos" },
];

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes)],
};
