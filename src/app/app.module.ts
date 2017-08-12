import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule, MdToolbarModule, MdListModule, MdGridListModule, MdCardModule } from '@angular/material';
import {FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    //Angular material imports
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdListModule,
    MdGridListModule,
    MdCardModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
