<!-- TOC -->

- [AngularMaterialPractice](#angularmaterialpractice)
    - [Code Scaffolding](#code-scaffolding)
        - [Development server](#development-server)
        - [Code scaffolding](#code-scaffolding)
        - [Build](#build)
        - [Running unit tests](#running-unit-tests)
        - [Running end-to-end tests](#running-end-to-end-tests)
        - [Further help](#further-help)
    - [Angular Material Design](#angular-material-design)
    - [Angular CDK (Component Development Kit)](#angular-cdk-component-development-kit)
    - [Configure application to use angular material](#configure-application-to-use-angular-material)
    - [Install and import hammerjs](#install-and-import-hammerjs)
    - [Setup and use material icons](#setup-and-use-material-icons)

<!-- /TOC -->

# AngularMaterialPractice

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7.

## Code Scaffolding

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Angular Material Design

>Material is both a UI Component framework and a reference implementation of Google's Material Design Specification

## Angular CDK (Component Development Kit)
 
> Set of reusable building blocks for component development. These reusable building blocks implements Material Design specifications

## Configure application to use angular material

* Install `**@angular/material**` and `**@angular/cdk**`

  ![@angular/material and @angular/cdk](readme_images/1.install_angular_material_and_angular_cdk.JPG "Installing @angular/material and @angular/cdk")

* Install `**@angular/animations**`

  ![@angular/material and @angular/cdk](readme_images/2.install_angular_animations.JPG "Installing @angular/material and @angular/cdk")

* Import animations module into app module

   ![Import animations module](readme_images/3.import_animations_module_in_app_module.JPG "Import animations module")

* Generate material module which imports required material modules and export at once and works as proxy module

  ![Generate new material module](readme_images\4.gnerate_a_module_which_imports_all_material_modules_and_exports_it_at_once.JPG "Generate new material module")

  ![Import necessary material modules and expl=ort them](readme_images/5.import_necessary_material_design_modules_and_explort_them.JPG "Import necessary material modules")

  ![Import material module in app module](readme_images/6.import_material_module_in_app_module.JPG "Import material module in app module")

* To get material design components look good we need to import one of the pre bulit themes from `@angular/material/prebuilt-themese` inot global styles.css file

![Import prebuilt theme](readme_images/7.import_prebuilt_theme_from_prebuilt_material_themes.JPG "Import prebuilt theme")

  ## Using angular material UI components
  >https://material.angular.io has sample and definitions about using different angular material UI components

## Install and import hammerjs

>Install and import hammerjs for gestur support in touch devices

![install hammerjs through npm](readme_images/8.install_hammerjs_through_npm.JPG "install hammerjs through npm")

![import hammerjs in main.ts for global use](readme_images/9.import_hammerjs_in_main_ts.JPG "import hammerjs in main.ts for global use")

## Setup and use material icons

* Include font family for icons in index.html

  ![icon font family](readme_images/10.imprt_icon_font_family_in_index_html.JPG "icon font family")

* Import `MatIconModule` into `appModule`

  ![import maticonmodule](readme_images/11.import_mat_icon_module_into_app_module.JPG "import maticonmodule")

* Sample usage of icon

![usage of icon](readme_images/12.sample_usage_of_mat_icon.JPG "usage of icon")

## Import all material moudles
> Following is the link of all material moudles
https://github.com/ajtowf/angularmaterial/blob/master/src/app/shared/material.module.ts

![import all material modules](readme_images/13.import_all_material_modules.JPG "import all material modules")