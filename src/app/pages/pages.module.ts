import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { BiographyComponent } from './components/biography/biography.component';
import { PhotosComponent } from './components/photos/photos.component';
import { VideosComponent } from './components/videos/videos.component';


@NgModule({
  declarations: [
    HomeComponent,
    BiographyComponent,
    PhotosComponent,
    VideosComponent
  ],
  imports: [
    SharedModule
  ]
})
export class PagesModule { }
