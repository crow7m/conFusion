import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdCheckboxModule,
  MdToolbarModule,
  MdListModule,
  MdGridListModule,
  MdCardModule,
  MdDialogModule

} from '@angular/material';
import { MaterialModule } from '@angular/material';
import {FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
/*import { DishDetailComponent} from './dish-details/dish-details.component';*/
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { DishService} from './services/dish.service';
import { PromotionService} from './services/promotion.service';
import { LeaderService} from './services/leader.service';

import { AppRoutingModule } from './app-routing/app-routing.module'
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent



  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    //Angular material imports
    MaterialModule,
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdListModule,
    MdGridListModule,
    MdCardModule,
    AppRoutingModule,
    FormsModule,
    MdDialogModule



  ],
  providers: [DishService, PromotionService, LeaderService ],
  entryComponents: [
  LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
