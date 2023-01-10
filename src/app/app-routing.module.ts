import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MuoversiaromaComponent } from './muoversiaroma/muoversiaroma.component';
import { RomapassComponent } from './romapass/romapass.component';
import { ComearrivareComponent } from './comearrivare/comearrivare.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'romapass', component: RomapassComponent},
  { path: 'muoversiaroma', component: MuoversiaromaComponent},
  { path: 'comearrivare', component: ComearrivareComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
