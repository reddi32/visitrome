import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MuoversiaromaComponent } from './muoversiaroma/muoversiaroma.component';
import { RomapassComponent } from './romapass/romapass.component';
import { ComearrivareComponent } from './comearrivare/comearrivare.component';
import { BlogComponent } from './blog/blog.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { AttrazioniComponent } from './museieattrazioni/museieattrazioni.component';
import { AttractionPostComponent } from './attraction-post/attraction-post.component';
import { ConcertComponent } from './concert/concert.component';
import { ConcertPostComponent } from './concert-post/concert-post.component';
import { TouristinfopointComponent } from './touristinfopoint/touristinfopoint.component';
import { CinquemotivipervisitareromaComponent } from './cinquemotivipervisitareroma/cinquemotivipervisitareroma.component';
import { DavedereComponent } from './davedere/davedere.component';
import { DovemangiareComponent } from './dovemangiare/dovemangiare.component';
import { VitanotturnaComponent } from './vitanotturna/vitanotturna.component';
import { RomainfamigliaComponent } from './romainfamiglia/romainfamiglia.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { MostreComponent } from './mostre/mostre.component';
import { ItinerariComponent } from './itinerari/itinerari.component';
import { NightlifePostComponent } from './nightlife-post/nightlife-post.component';
import { ShoppingPostComponent } from './shopping-post/shopping-post.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'romapass', component: RomapassComponent},
  { path: 'muoversiaroma', component: MuoversiaromaComponent},
  { path: 'comearrivare', component: ComearrivareComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'blogpost/:id', component: BlogPostComponent},
  { path: 'museieattrazioni', component: AttrazioniComponent},
  { path: 'attractionpost/:id', component: AttractionPostComponent},
  { path: 'concert', component: ConcertComponent},
  { path: 'concertpost/:id', component: ConcertPostComponent},
  { path: 'touristinfopoint', component: TouristinfopointComponent},
  { path: 'cinquemotivipervisitareroma', component: CinquemotivipervisitareromaComponent},
  { path: 'davedere', component: DavedereComponent},
  { path: 'dovemangiare', component: DovemangiareComponent},
  { path: 'vitanotturna', component: VitanotturnaComponent},
  { path: 'romainfamiglia', component: RomainfamigliaComponent},
  { path: 'shopping', component: ShoppingComponent},
  { path: 'mostre', component: MostreComponent},
  { path: 'itinerari', component: ItinerariComponent},
  { path: 'vitanotturna', component: VitanotturnaComponent},
  { path: 'nightlifepost', component: NightlifePostComponent},
  { path: 'shopping', component: ShoppingComponent},
  { path: 'shoppingpost', component: ShoppingPostComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
