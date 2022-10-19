import { NgModule } from '@angular/core';
import { CrystalLightboxModule } from '@crystalui/angular-lightbox';

import { SharedModule } from '../shared/shared.module';
import { ArticlesModule } from './articles/articles.module';
import { BiographyComponent } from './components/biography/biography.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PhotosComponent } from './components/photos/photos.component';
import { VideosComponent } from './components/videos/videos.component';


@NgModule({
  declarations: [
    HomeComponent,
    BiographyComponent,
    PhotosComponent,
    VideosComponent,
    NotFoundComponent
  ],
  imports: [
    ArticlesModule,
    CrystalLightboxModule,
    SharedModule
  ]
})
export class PagesModule { }
