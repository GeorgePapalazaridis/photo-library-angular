# PhotoLibraryAngular

This project is a Photo Library application developed with Angular version 17.3.11. The application features dynamic photo streams, favorites functionality, and detailed photo views. It adheres to Angular best practices, including standalone components, change detection strategies, and clean architecture.

## Features

-   Infinite scrolling photo grid
-   Add and manage favorite photos
-   View details of individual photos
-   Organized and scalable file structure
-   Uses Angular Standalone Components and OnPush Change Detection
-   SCSS for styling with global theming support
-   Mock services to simulate API behavior

## Implemented Features

### Photo Grid Component (#3)

-   **Infinite Scrolling**: Displays photos dynamically as the user scrolls down, using Angular's `IntersectionObserver`.
-   **Mock API Service**: Fetches photos with simulated delays to mimic real-world server behavior.
-   **Responsive Design**: Built using Angular Material's `mat-grid-list`.
-   **Loading Spinner**: Shows a spinner while photos are being fetched.
-   **File Structure**: Integrated into the `photo-grid` directory under `components`.

### Favorites Functionality (Upcoming)

-   Users can add photos to a Favorites library.
-   Favorites persist after page refresh using local storage.
-   A dedicated `/favorites` route will display all saved photos.

### Detailed View (Upcoming)

-   Users can view individual photos in full-screen mode at `/photos/:id`.
-   Allows removing photos from Favorites.

## Planned Features

-   Develop the Favorites and Detail View components.
-   Create a shared header for navigation between routes.
-   Add unit tests for all components and services.

## File Structure

The project is organized into the following key folders:

-   **`src/app/components`**:
    -   **`photo-grid`**:
        -   Handles infinite scrolling photo grids.
        -   Includes `photo-grid.component.html`, `photo-grid.component.scss`, and `photo-grid.component.ts`.
    -   **`favorites`**:
        -   Placeholder for the Favorites library (to be implemented).
    -   **`photo-detail`**:
        -   Placeholder for the photo detail view (to be implemented).
-   **`src/app/core`**:
    -   **`dto`**: Data Transfer Objects for API communication.
    -   **`interfaces`**: Shared TypeScript interfaces.
    -   **`pipes`**: Placeholder for reusable pipes (currently unused).
    -   **`services`**:
        -   `photo.service.ts`: Mock service for fetching photos.
    -   **`theming`**:
        -   Global SCSS files for theming and browser normalization.
-   **`src/app/shared`**:
    -   **`loading-spinner`**:
        -   A reusable loading spinner component.
-   **`src/assets`**:
    -   Static assets like images and internationalization files.

## Development Setup

1. **Development Server**
   Run `ng serve` to start the development server. Navigate to `http://localhost:4200/`. The application will automatically reload when source files are modified.

2. **Code Generation**
   Use Angular CLI commands to scaffold components, services, etc., as required.

3. **Build**
   Run `ng build` to build the project. The build artifacts are stored in the `dist/` directory.

4. **Unit Tests**
   Execute `ng test` to run unit tests using [Karma](https://karma-runner.github.io).

## Current Status

-   Project setup and folder structure have been finalized.
-   Routes are configured in `app.config.ts`.
-   Global SCSS styles are loaded through `core/theming/styles.scss`.
-   Initial components and service structure are ready for further implementation.

## 📂 Project Structure

```plaintext
photo-library-angular/
├── .angular/                                      # Angular CLI cache
├── node_modules/                                  # Node.js modules (dependencies)
├── src/
│   ├── app/                                       # Application-specific files
│   │   ├── components/                            # Feature components
│   │   │   ├── photo-grid/                        # Infinite photo grid component
│   │   │   │   ├── photo-grid.component.html
│   │   │   │   ├── photo-grid.component.scss
│   │   │   │   ├── photo-grid.component.ts
│   │   │   │   └── photo-grid.component.spec.ts
│   │   │   ├── favorites/                         # Favorites list component (Upcoming)
│   │   │   └── photo-detail/                      # Photo detail view component (Upcoming)
│   │   ├── core/                                  # Core services and utilities
│   │   │   ├── dto/                               # Data Transfer Objects
│   │   │   │   ├── photo
│   │   │   │   │   └── photo.ts
│   │   │   │   └── index.ts  
│   │   │   ├── interfaces/                        # Shared TypeScript interfaces
│   │   │   │   └── index.ts  
│   │   │   ├── pipes/                             # Placeholder for reusable pipes
│   │   │   │   └── index.ts  
│   │   │   ├── services/                          # Angular services
│   │   │   │   ├── photo
│   │   │   │   │   └── photo.service.ts
│   │   │   │   └── index.ts
│   │   │   └── theming/                           # Global SCSS styles and theming
│   │   │       ├── layouts
│   │   │       │   └── _main.scss
│   │   │       ├── styles.scss                    # Application-wide SCSS styles
│   │   │       └── theme-variable.scss
│   │   ├── shared/                                # Shared reusable components
│   │   │   ├── loading-spinner/                   # Loading spinner component
│   │   │   │   └── loading-spinner.component.ts
│   │   ├── app.component.ts      
│   │   ├── app.config.ts      
│   ├── assets/                                    # Static assets
│   │   ├── i18n/                                  # Internationalization JSON files
│   │   └── images/                                # Project images
│   │       └── placeholder-image.png  
│   ├── environments/                              # Environment-specific settings
│   ├── favicon.ico                                # Application icon
│   ├── index.html                                 # Main HTML entry point
│   ├── main.ts                                    # Angular application bootstrap
├── .gitignore                                     # Git ignore rules
├── angular.json                                   # Angular CLI configuration
├── LICENSE                                        # Project license
├── package.json                                   # Node.js project metadata and dependencies
├── package-lock.json                              # Dependency lock file
├── README.md                                      # Project documentation
└── tsconfig.json                                  # TypeScript configuration
```
