import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule, MdToolbarModule, MdListModule, MdGridListModule, MdCardModule } from '@angular/material';
import {FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
import { DishDetailsComponent } from './dish-details/dish-details.component';

import { DishService} from './services/dish.service';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishDetailsComponent
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
  providers: [DishService],
  bootstrap: [AppComponent]
})
export class AppModule { }
