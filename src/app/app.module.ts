import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { ReactiveFormValidationComponent } from './reactive-form-validation/reactive-form-validation.component';


@NgModule({
  declarations: [
    AppComponent,
    FormValidationComponent,
    ReactiveFormValidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
