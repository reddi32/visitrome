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

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CinquemotivipervisitareromaComponent } from './cinquemotivipervisitareroma/cinquemotivipervisitareroma.component';
import { DavedereComponent } from './davedere/davedere.component';
import { DovemangiareComponent } from './dovemangiare/dovemangiare.component';
import { VitanotturnaComponent } from './vitanotturna/vitanotturna.component';
import { RomainfamigliaComponent } from './romainfamiglia/romainfamiglia.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { MostreComponent } from './mostre/mostre.component';
import { ItinerariComponent } from './itinerari/itinerari.component';
import { NightlifePostComponent } from './nightlife-post/nightlife-post.component';
import { RomainfamigliaPostComponent } from './romainfamiglia-post/romainfamiglia-post.component';
import { ShoppingPostComponent } from './shopping-post/shopping-post.component';
import { DovemangiarePostComponent } from './dovemangiare-post/dovemangiare-post.component';
import { MostrePostComponent } from './mostre-post/mostre-post.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { ComingSoonTwoComponent } from './coming-soon-two/coming-soon-two.component';
import { ViaggioinfamigliaComponent } from './viaggioinfamiglia/viaggioinfamiglia.component';
import { Giorno1Component } from './viaggioinfamiglia/giorno1/giorno1.component';
import { Giorno2Component } from './viaggioinfamiglia/giorno2/giorno2.component';
import { Giorno3Component } from './viaggioinfamiglia/giorno3/giorno3.component';


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
    NightlifePostComponent,
    RomainfamigliaPostComponent,
    ShoppingPostComponent,
    DovemangiarePostComponent,
    MostrePostComponent,
    ComingSoonComponent,
    ComingSoonTwoComponent,
    ViaggioinfamigliaComponent,
    Giorno1Component,
    Giorno2Component,
    Giorno3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MarkdownModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
