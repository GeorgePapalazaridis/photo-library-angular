# PhotoLibraryAngular

This project is a Photo Library application developed with Angular version 17.3.11. The application features dynamic photo streams, favorites functionality, and detailed photo views. It adheres to Angular best practices, including standalone components, change detection strategies, and clean architecture.

## Features

-   Infinite scrolling photo grid
-   Add and manage favorite photos
-   View details of individual photos
-   Organized and scalable file structure
-   Uses Angular Standalone Components and OnPush Change Detection
-   SCSS for styling with global theming support

## Planned Features

-   Implement infinite scrolling for the photo grid.
-   Add functionality for managing a list of favorite photos.
-   Develop detail view for individual photos.
-   Integrate API calls for fetching photo data.

## File Structure

The project is organized into the following key folders:

-   **`src/app/components`**: Contains feature-specific components such as `photo-grid`, `favorites`, and `photo-detail`.
-   **`src/app/core`**: Houses reusable elements such as:
    -   `dto`: Data Transfer Objects for API communication.
    -   `interfaces`: Shared TypeScript interfaces.
    -   `pipes`: Reusable pipes (currently not in use but ready for future needs).
    -   `services`: Angular services for managing HTTP calls and shared business logic.
    -   `styles`: Global SCSS files for theming and browser normalization.
-   **`src/app/shared`**: Includes shared components such as a loading spinner, used across the application.
-   **`src/assets`**: Contains static assets like images and i18n (translation) files.
-   **`src/environments`**: Environment-specific configurations for development and production.

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
├── .angular/                       # Angular CLI cache
├── node_modules/                   # Node.js modules (dependencies)
├── src/
│   ├── app/                        # Application-specific files
│   │   ├── components/             # Feature components
│   │   │   ├── favorites/          # Favorites list component
│   │   │   ├── header/             # Header component
│   │   │   ├── photo-detail/       # Photo detail view component
│   │   │   └── photo-grid/         # Infinite photo grid component
│   │   ├── core/                   # Core services and utilities
│   │   │   ├── dto/                # Data Transfer Objects
│   │   │   ├── interfaces/         # Shared TypeScript interfaces
│   │   │   ├── pipes/              # Custom reusable pipes
│   │   │   ├── services/           # Angular services
│   │   │   └── styles/             # Global SCSS styles and theming
│   │   │       └── styles.scss
│   │   └── shared/                 # Shared reusable components
│   │       └── loading-spinner/    # Loading spinner component
│   ├── assets/                     # Static assets
│   │   ├── i18n/                   # Internationalization JSON files
│   │   └── images/                 # Project images
│   ├── environments/               # Environment-specific settings
│   ├── favicon.ico                 # Application icon
│   ├── index.html                  # Main HTML entry point
│   ├── main.ts                     # Angular application bootstrap
│   └── styles.scss                 # Application-wide SCSS styles
├── .gitignore                      # Git ignore rules
├── angular.json                    # Angular CLI configuration
├── LICENSE                         # Project license
├── package.json                    # Node.js project metadata and dependencies
├── package-lock.json               # Dependency lock file
├── README.md                       # Project documentation
└── tsconfig.json                   # TypeScript configuration
```
