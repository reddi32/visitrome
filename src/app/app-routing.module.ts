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
import { DovemangiarePostComponent } from './dovemangiare-post/dovemangiare-post.component';
import { MostrePostComponent } from './mostre-post/mostre-post.component';
import { RomainfamigliaPostComponent } from './romainfamiglia-post/romainfamiglia-post.component';
import { ViaggioinfamigliaComponent } from './viaggioinfamiglia/viaggioinfamiglia.component';
import { ViaggioconamiciComponent } from './viaggioconamici/viaggioconamici.component';
import { ViaggioincoppiaComponent } from './viaggioincoppia/viaggioincoppia.component';

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
  { path: 'romainfamigliapost/:id', component: RomainfamigliaPostComponent},
  { path: 'shopping', component: ShoppingComponent},
  { path: 'mostre', component: MostreComponent},
  { path: 'mostrepost/:id', component: MostrePostComponent},
  { path: 'itinerari', component: ItinerariComponent},
  { path: 'vitanotturna', component: VitanotturnaComponent},
  { path: 'nightlifepost/:id', component: NightlifePostComponent},
  { path: 'shopping', component: ShoppingComponent},
  { path: 'shoppingpost/:id', component: ShoppingPostComponent},
  { path: 'dovemangiarepost/:id', component: DovemangiarePostComponent},
  { path: 'viaggioinfamiglia', component: ViaggioinfamigliaComponent},
  { path: 'viaggioconamici', component: ViaggioconamiciComponent},
  { path: 'viaggioincoppia', component: ViaggioincoppiaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
