import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BiographyComponent } from './pages/components/biography/biography.component';
import { HomeComponent } from './pages/components/home/home.component';
import { NotFoundComponent } from './pages/components/not-found/not-found.component';
import { PhotosComponent } from './pages/components/photos/photos.component';
import { VideosComponent } from './pages/components/videos/videos.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'biography',
    component: BiographyComponent,
  },
  {
    path: 'photos',
    component: PhotosComponent,
  },
  {
    path: 'videos',
    component: VideosComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
