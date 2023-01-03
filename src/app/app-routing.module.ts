import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PianificaviaggioComponent } from './pianificaviaggio/pianificaviaggio.component';
import { RomapassComponent } from './romapass/romapass.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'romapass', component: RomapassComponent},
  { path: 'pianificaviaggio', component: PianificaviaggioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
