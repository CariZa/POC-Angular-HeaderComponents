# HeaderComponents

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Notes

# MyComponentLibrary

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.1.

## Overview

The purpose if this repo is to contain reusable components that can be imported into other angular projects

Using modules to export and ng packagr

Add components to a module:

To generate a module (example):

    $ ng generate module app/modules/header

To generate components (examples):

    $ ng generate component app/modules/components/red-header
    $ ng generate component app/modules/components/blue-header

In the module you created, example header module:

    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { RedHeaderComponent } from '../components/red-header/red-header.component';
    import { BlueHeaderComponent } from '../components/blue-header/blue-header.component';

    @NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        RedHeaderComponent,
        BlueHeaderComponent
    ],
    exports: [
        RedHeaderComponent,
        BlueHeaderComponent
    ]
    })
    export class HeaderModule { }

Then create a public_api.ts file in root (eg ./public_api.ts):

    export * from './src/app/modules/header/header.module';

And in an ng-package.json file in root (eg ./ng-pckage.json):

    {
        "$schema": "./node_modules/ng-packagr/ng-package.schema.json",
        "lib": {
        "entryFile": "public_api.ts"
        },
        "whitelistedNonPeerDependencies": [
            "@angular/animations",
            "@angular/common",
            "@angular/compiler",
            "@angular/core",
            "@angular/forms",
            "@angular/http",
            "@angular/platform-browser",
            "@angular/platform-browser-dynamic",
            "@angular/router",
            "core-js",
            "rxjs",
            "zone.js"
        ]
    }


Prepare package

    $ npm run packagr
    $ cd ./dist
    $ npm package







# Refs

https://www.youtube.com/watch?v=4u9_kdkvTsc


