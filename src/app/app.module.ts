import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextInteporlationComponent } from './components/text-inteporlation/text-inteporlation.component';
import { PropertyBindingsComponent } from './components/property-bindings/property-bindings.component';
import { AttributeBindingsComponent } from './components/attribute-bindings/attribute-bindings.component';
import { ClassStyleBindingComponent } from './components/class-style-binding/class-style-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    TextInteporlationComponent,
    PropertyBindingsComponent,
    AttributeBindingsComponent,
    ClassStyleBindingComponent,
    EventBindingComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
