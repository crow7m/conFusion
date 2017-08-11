import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule, MdToolbarModule } from '@angular/material';
import {FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    //Angular material imports
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
