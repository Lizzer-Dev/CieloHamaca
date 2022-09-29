import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './data/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import { FormComponent } from './data/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
