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
import { ViaggioconamiciComponent } from './viaggioconamici/viaggioconamici.component';
import { Giorno4Component } from './viaggioconamici/giorno4/giorno4.component';
import { Giorno5Component } from './viaggioconamici/giorno5/giorno5.component';
import { Giorno6Component } from './viaggioconamici/giorno6/giorno6.component';
import { ViaggioincoppiaComponent } from './viaggioincoppia/viaggioincoppia.component';
import { Giorno7Component } from './viaggioincoppia/giorno7/giorno7.component';
import { Giorno8Component } from './viaggioincoppia/giorno8/giorno8.component';
import { Giorno9Component } from './viaggioincoppia/giorno9/giorno9.component';
import { GiardiniComponent } from './giardini/giardini.component';
import { StreetfoodComponent } from './dovemangiare/streetfood/streetfood.component';
import { RistorantiComponent } from './dovemangiare/ristoranti/ristoranti.component';
import { DolciaromaComponent } from './dovemangiare/dolciaroma/dolciaroma.component';
import { SpecialitaenogastronomicheComponent } from './dovemangiare/specialitaenogastronomiche/specialitaenogastronomiche.component';
import { FrittidiromaComponent } from './dovemangiare/frittidiroma/frittidiroma.component';
import { CarciofiComponent } from './dovemangiare/carciofi/carciofi.component';
import { PaginationComponent } from './pagination/pagination.component';


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
    ViaggioconamiciComponent,
    Giorno4Component,
    Giorno5Component,
    Giorno6Component,
    ViaggioincoppiaComponent,
    Giorno7Component,
    Giorno8Component,
    Giorno9Component,
    GiardiniComponent,
    StreetfoodComponent,
    RistorantiComponent,
    DolciaromaComponent,
    SpecialitaenogastronomicheComponent,
    FrittidiromaComponent,
    CarciofiComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MarkdownModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
