# PerinatalGeorgiaApp

The objective of this app is to expose a website with publicly available perinatal information from the Georgia Department of Community Health so that users may easily be able to get access to that data. To my knowledge that data is only available via an outdated [AJC site](https://hospitals.ajc.com/#perinatal/110198) or through an Access Database file. 

Data was obtained from questionaired sent out to Georgia hospitals on http://georgiahealthdata.info/2019_Annual_Hospital_Questionnaire.pdf from 2000 - 2019. More specifically the table perinatal (T7:  Perinatal) is from the access database found on http://www.georgiahealthdata.info/downloads/Survey_Databases/Hospital_Survey_Data_06_01_2020.zip (published 06/1/2020). The data manipulation that was done was strictly for ease of use as follows:
1. Database name was converted from "T7:  Perinatal" to perinatal
2. Columns were manually converted from spaced depended to lower_case_underscore_separated
3. Year column was renamed to yr to avoid PSQL ubiquity.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.8.

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
