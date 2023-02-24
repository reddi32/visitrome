import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RomapassComponent } from './romapass/romapass.component';
import { MuoversiaromaComponent } from './muoversiaroma/muoversiaroma.component';
import { ComearrivareComponent } from './comearrivare/comearrivare.component';
import { BlogComponent } from './blog/blog.component';
import { BlogPostComponent } from './blog-post/blog-post.component';

import { MarkdownModule } from 'ngx-markdown';
import { AttrazioniComponent } from './museieattrazioni/museieattrazioni.component';
import { AttractionPostComponent } from './attraction-post/attraction-post.component';
import { ConcertComponent } from './concert/concert.component';

import { HttpClientModule } from '@angular/common/http';
import { ConcertPostComponent } from './concert-post/concert-post.component';
import { TouristinfopointComponent } from './touristinfopoint/touristinfopoint.component';

import { FormsModule } from '@angular/forms';
import { CinquemotivipervisitareromaComponent } from './cinquemotivipervisitareroma/cinquemotivipervisitareroma.component';
import { DavedereComponent } from './davedere/davedere.component';
import { DovemangiareComponent } from './dovemangiare/dovemangiare.component';
import { VitanotturnaComponent } from './vitanotturna/vitanotturna.component';
import { RomainfamigliaComponent } from './romainfamiglia/romainfamiglia.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { MostreComponent } from './mostre/mostre.component';
import { ItinerariComponent } from './itinerari/itinerari.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RomapassComponent,
    MuoversiaromaComponent,
    ComearrivareComponent,
    BlogComponent,
    BlogPostComponent,
    AttrazioniComponent,
    AttractionPostComponent,
    ConcertComponent,
    ConcertPostComponent,
    TouristinfopointComponent,
    CinquemotivipervisitareromaComponent,
    DavedereComponent,
    DovemangiareComponent,
    VitanotturnaComponent,
    RomainfamigliaComponent,
    ShoppingComponent,
    MostreComponent,
    ItinerariComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MarkdownModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
