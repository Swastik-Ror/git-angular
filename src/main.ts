<<<<<<< HEAD
import '@angular/localize/init';
=======
/// <reference types="@angular/localize" />

>>>>>>> 197b2f7fd4797d94a9b7b2bbe65c32b1dcfeb125
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';


bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
