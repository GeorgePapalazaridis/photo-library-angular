import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { provideRouter, Routes } from "@angular/router";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { HttpClientModule } from "@angular/common/http";

export const routes: Routes = [
    { path: "", redirectTo: "/photos", pathMatch: "full" },
    {
        path: "photos",
        loadComponent: () =>
            import("./components/photo-grid/photo-grid.component").then(
                (c) => c.PhotoGridComponent
            ),
    },
    {
        path: "favorites",
        loadComponent: () =>
            import("./components/favorites/favorites.component").then(
                (c) => c.FavoritesComponent
            ),
    },
    {
        path: "photos/:id",
        loadComponent: () =>
            import("./components/photo-detail/photo-detail.component").then(
                (c) => c.PhotoDetailComponent
            ),
    },
    { path: "**", redirectTo: "/photos" },
];

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideAnimationsAsync(),
        importProvidersFrom(HttpClientModule),
    ],
};
