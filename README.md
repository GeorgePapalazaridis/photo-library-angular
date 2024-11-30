# PhotoLibraryAngular

Welcome to **PhotoLibraryAngular**, a **dynamic photo library** application built with **Angular 17.3.11**. This app provides features such as infinite scrolling, the ability to manage favorite photos, and detailed full-screen photo views. The app follows **Angular best practices**, including **standalone components**, **OnPush change detection**, and a **clean architecture** design pattern.

## 🚀 Features

-   **Infinite scrolling** photo grid
-   Add and manage **favorite photos**
-   View details of individual photos
-   **Responsive design** for both mobile and desktop
-   **Organized and scalable file structure**
-   Uses **Angular Standalone Components** and **OnPush Change Detection**
-   **SCSS** for styling with global theming support
-   Mock services to simulate API behavior

![App Screenshot - Infinity Loading - Three cols Photo Grid](https://github.com/user-attachments/assets/b5ae52a6-f7af-4829-b765-8dd44f4f3953)


## 💻 Implemented Features

### Photo Grid Component

-   **Infinite Scrolling**: Displays photos dynamically as the user scrolls down, using Angular's `IntersectionObserver`.
-   **Mock API Service**: Fetches photos with simulated delays to mimic real-world server behavior.
-   **Responsive Design**: Built using Angular Material's `mat-grid-list` to adjust the layout for both mobile and desktop views.
-   **Loading Spinner**: Shows a spinner while photos are being fetched.
-   **File Structure**: Integrated into the `photo-grid` directory under `components`.

### Favorites Functionality

-   Users can add photos to a Favorites library.
-   Favorites persist after page refresh using **local storage**.
-   A dedicated `/favorites` route will display all saved photos.

### Detailed Photo View

-   Users can view individual photos in full-screen mode at `/photos/:id`.
-   Allows removing photos from Favorites.

## ⚙️ Installation

To run the project locally:

1. Clone the repository:

    ```bash
    git clone https://github.com/GeorgePapalazaridis/photo-library-angular.git
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the development server:

    ```bash
    ng serve
    ```

4. Navigate to `http://localhost:4200/` to view the app in your browser.

## 🧑‍💻 Git and Project Workflow

I’ve used **Git** to manage this project’s development, and this repository reflects how I approached version control during the process. Here are some key points about my Git usage:

-   **Issues**: I created issues for each task to track progress and ensure that features were developed in an organized manner. You can view all the issues in this repository [here](https://github.com/GeorgePapalazaridis/photo-library-angular/issues).
-   **Commits**: I ensured that each commit message is descriptive and tied to an issue where applicable. For example, each commit related to a feature or bug is linked to an issue number like `Fixes #12`. You can explore the commit history [here](https://github.com/GeorgePapalazaridis/photo-library-angular/commits?author=GeorgePapalazaridis&since=2024-11-28&until=2024-11-30).
-   **Branching**: I used branching to isolate features and keep development structured. Feature branches were created for each task, ensuring a clean history.

## 📂 File Structure

The project is organized into the following key folders:

-   **`src/app/components`**:
    -   **`photo-grid`**: Handles infinite scrolling photo grids.
    -   **`favorites`**: Placeholder for the Favorites library.
    -   **`photo-detail`**: Placeholder for the photo detail view.
-   **`src/app/core`**:
    -   **`dto`**: Data Transfer Objects for API communication.
    -   **`interfaces`**: Shared TypeScript interfaces.
    -   **`pipes`**: Placeholder for reusable pipes (currently unused).
    -   **`services`**: Angular services.
        -   `photo.service.ts`: Mock service for fetching photos.
        -   `breakpoint.service.ts`: Service for responsive mat-grid-list.
        -   `favorites.service.ts`: Service for CRUL actions on photos.
    -   **`theming`**: Global SCSS files for theming and browser normalization.
-   **`src/app/shared`**:
    -   **`loading-spinner`**: A reusable loading spinner component.
-   **`src/assets`**: Static assets like images and internationalization files.

## 🛠️ Development Setup

1. **Development Server**
   Run `ng serve` to start the development server. Navigate to `http://localhost:4200/`. The application will automatically reload when source files are modified.

2. **Code Generation**
   Use Angular CLI commands to scaffold components, services, etc., as required.

3. **Build**
   Run `ng build` to build the project. The build artifacts are stored in the `dist/` directory.

4. **Unit Tests**
   Execute `ng test` to run unit tests using [Karma](https://karma-runner.github.io).

## 📈 Current Status

-   Project setup and folder structure have been finalized.
-   Routes are configured in `app.config.ts`.
-   Global SCSS styles are loaded through `core/theming/styles.scss`.
-   Initial components and service structure are ready for further implementation.

---

## 🗂️ Project Structure

```plaintext
photo-library-angular/
├── .angular/                                      # Angular CLI cache
├── node_modules/                                  # Node.js modules (dependencies)
├── src/
│   ├── app/                                       # Application-specific files
│   │   ├── components/                            # Feature components
│   │   │   ├── favorites/                         # Favorites list component
│   │   │   │   ├── favorites.component.html
│   │   │   │   ├── favorites.component.scss
│   │   │   │   ├── favorites.component.ts
│   │   │   │   └── favorites.component.spec.ts
│   │   │   ├── header/                         # Favorites list component
│   │   │   │   ├── header.component.html
│   │   │   │   ├── header.component.scss
│   │   │   │   ├── header.component.ts
│   │   │   │   └── header.component.spec.ts
│   │   │   └── photo-detail/                      # Photo detail view component
│   │   │   │   ├── photo-detail.component.html
│   │   │   │   ├── photo-detail.component.scss
│   │   │   │   ├── photo-detail.component.ts
│   │   │   │   └── photo-detail.component.spec.ts
│   │   │   ├── photo-grid/                        # Infinite photo grid component
│   │   │   │   ├── photo-grid.component.html
│   │   │   │   ├── photo-grid.component.scss
│   │   │   │   ├── photo-grid.component.ts
│   │   │   │   └── photo-grid.component.spec.ts
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
│   │   │   │   ├── breakpoint
│   │   │   │   │   └── breakpoint.service.ts
│   │   │   │   ├── favorites
│   │   │   │   │   └── favorites.service.ts
│   │   │   │   ├── photo
│   │   │   │   │   └── photo.service.ts
│   │   │   │   └── index.ts
│   │   │   └── theming/                           # Global SCSS styles and theming
│   │   │       ├── layouts
│   │   │   │   ├── ├── _main.scss
│   │   │   │   ├── ├── _menu.scss
│   │   │       │   └── _responsive.scss
│   │   │       ├── normalize.scss
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
