import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MuoversiaromaComponent } from './muoversiaroma/muoversiaroma.component';
import { RomapassComponent } from './romapass/romapass.component';
import { ComearrivareComponent } from './comearrivare/comearrivare.component';
import { BlogComponent } from './blog/blog.component';
import { BlogPostComponent } from './blog-post/blog-post.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'romapass', component: RomapassComponent},
  { path: 'muoversiaroma', component: MuoversiaromaComponent},
  { path: 'comearrivare', component: ComearrivareComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'blogpost/:id', component: BlogPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
