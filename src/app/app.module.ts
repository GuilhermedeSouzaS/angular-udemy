import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextInteporlationComponent } from './components/text-inteporlation/text-inteporlation.component';
import { PropertyBindingsComponent } from './components/property-bindings/property-bindings.component';

@NgModule({
  declarations: [
    AppComponent,
    TextInteporlationComponent,
    PropertyBindingsComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
