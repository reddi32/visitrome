import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RomapassComponent } from './romapass/romapass.component';
import { MuoversiaromaComponent } from './muoversiaroma/muoversiaroma.component';
import { ComearrivareComponent } from './comearrivare/comearrivare.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RomapassComponent,
    MuoversiaromaComponent,
    ComearrivareComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
