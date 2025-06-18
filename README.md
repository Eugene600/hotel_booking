# Hotel Booking Website

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.1.

## Project Structure Overview

The `src/app` directory is organized into three primary folders: `core`, `features`, and `shared`. This separation helps manage the application's complexity by categorizing different types of modules, components, and services.

Below is an example of how the structure should look.

```bash
src/
├── app/
│   ├── app.ts         # Main application component
│   ├── app.specs.ts            # Root module (or app.config.ts if standalone root)
│   ├── app-routes.ts    # Main application routing
│   │
│   ├── core/                    # Single-instance, application-wide services & components
│   │   ├── core.module.ts       # Core module file
│   │   ├── auth/                # e.g., authentication service, guards
│   │   ├── layout/              # e.g., header, footer, global navigation
│   │   ├── services/            # e.g., error handling, logging, global data
│   │
│   ├── features/                # Domain-specific, often lazy-loaded modules for distinct functionalities
│   │   ├── home/                # e.g., Home page module
│   │   ├── about/               # e.g., About Us page module
│   │   ├── contact/             # e.g., Contact Us page module
│   │   ├── user-management/     # e.g., User list, user profiles
│   │   ├── product-catalog/     # e.g., Product listing, product details
│   │
│   ├── shared/                  # Reusable UI components, directives, pipes, and utility services
│   │   ├── shared.module.ts     # Shared module file
│   │   ├── components/          # e.g., buttons, modals, alerts, spinners
│   │   ├── directives/          # e.g., custom highlight directives
│   │   ├── pipes/               # e.g., date formatting, currency formatting
│   │   ├── services/            # e.g., non-singleton utility functions
│   │
│   └── ... (other app-wide assets or configurations)
```

## Understanding Each Folder

### 1. `core` Folder/Module

**Purpose:**
The `core` module is designed for **single-instance services, components, and functionalities that are loaded only once** when the application starts. These are essential, application-wide elements that should exist as singletons throughout the entire application lifecycle.

**What goes in `core`:**

* **Singleton Services:** Services that provide global functionality and should have only one instance.
    * `AuthService`: Manages user authentication state globally.
    * `ErrorHandlerService`: Centralized error handling for the entire application.
    * `LoggerService`: Application-wide logging.
* **Root-level Guards & Interceptors:**
    * `AuthGuard`: Protects routes across the application.
    * `AuthInterceptor`: Adds authentication tokens to outgoing HTTP requests globally.
* **Global Layout Components:** Components that are part of the main application layout and are always present.
    * `HeaderComponent`, `FooterComponent`, `SidebarComponent`.
* **Any module imported only once by `AppModule`:** Modules that set up global configurations or services.

**What *not* to put in `core`:**

* Components that are meant to be rendered multiple times or are specific to a single page/feature.
* Services that are not meant to be singletons or are feature-specific.
* Modules that are intended for lazy loading.

**Key Principle:** The `CoreModule` (or its individual components/services) should **only be imported by the root `AppModule`**. Importing it into lazily loaded feature modules can lead to multiple instances of singleton services, which is generally undesirable.

### 2. `features` Folder

**Purpose:**
The `features` folder contains **feature-specific modules and components** that encapsulate distinct parts of the application's functionality. Each sub-folder within `features` typically represents a separate, self-contained functional area. These modules are prime candidates for **lazy loading** to improve initial application performance.

**What goes in `features`:**

* **Feature Modules:** Each significant functional area of your application should typically be its own module.
    * `Home`: For the Home page.
    * `About`: For the About Us page.
    * `Contact`: For the Contact Us page.
* **Components Specific to a Feature:** Components that belong solely to that feature.
    * `DevelopersListComponent`, `UserDetailComponent` within `Contact`.
* **Services Specific to a Feature:** Services that are only used within that particular feature module.
    * `UserService` (if it only serves the `Home`).
* **Feature-Specific Routing:** Each feature module typically has its own `forChild` routing configuration to define routes within that feature's scope.

**What *not* to put in `features`:**

* Global, single-instance services (these belong in `core`).
* Truly reusable UI components (these belong in `shared`).
* Components that are part of the main application layout (these belong in `core`).

**Key Principle:** Feature modules should be as independent as possible. **A feature module should generally NOT import another feature module directly** to avoid tight coupling, circular dependencies, and breaking lazy loading benefits. If one feature needs something from another, consider if that functionality should be extracted into the `shared` module.

### 3. `shared` Folder/Module

**Purpose:**
The `shared` module is for **reusable components, directives, pipes, and utility services** that are consumed by multiple feature modules (and potentially `CoreModule` or `AppModule`). The items in `shared` are generic and have no dependencies on specific feature modules.

**What goes in `shared`:**

* **Reusable UI Components:** Components that can be used in various parts of the application.
    * `ButtonComponent`, `ModalComponent`, `LoadingSpinnerComponent`, `AlertComponent`, `InputFieldComponent`.
* **Reusable Directives:** Custom directives used widely across components.
    * `HighlightDirective`, `AutoFocusDirective`.
* **Reusable Pipes:** Custom pipes for data transformation.
    * `CurrencyFormatPipe`, `DateAgoPipe`.
* **Common Utility Services:** Services that provide generic utility functions (e.g., string manipulation, validation helpers) but do not manage global application state.
* **Re-exporting Common Angular Modules:** It's common practice to `import` and then `export` modules like `CommonModule`, `FormsModule`, `ReactiveFormsModule`, or Angular Material modules. This allows modules that import `SharedModule` to automatically gain access to their contents without needing to import them separately.

**What *not* to put in `shared`:**

* Application-specific services that should be singletons (belong in `core`).
* Components or services specific to only one feature (belong in `features`).
* Components that handle routing logic.

**Key Principle:** The `SharedModule` should **not import `CoreModule` or any specific feature modules**. This ensures it remains generic and avoids circular dependencies, making it truly reusable across your application.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
