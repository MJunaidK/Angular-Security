import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LessonsComponent } from './lessons/lessons.component';
import {RouterModule} from "@angular/router";
import {routesConfig} from "./routes.config";
import {LessonsService} from "./services/lessons.service";
import {ReactiveFormsModule} from "@angular/forms";

import {AuthService} from "./services/auth.service";












@NgModule({
  declarations: [
    AppComponent,
    LessonsComponent
  ],
  imports: [
    BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(routesConfig),
      ReactiveFormsModule
  ],
  providers: [
      LessonsService,
      AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
