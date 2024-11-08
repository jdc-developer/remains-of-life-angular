import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ConsumedPlaythroughComponent } from './components/consumed-playthrough/consumed-playthrough.component';
import { ForlornEpComponent } from './components/forlorn-ep/forlorn-ep.component';
import { NewAlbumArticleComponent } from './components/new-album-article/new-album-article.component';
import { NewSingleArticleComponent } from './components/new-single-article/new-single-article.component';


@NgModule({
  declarations: [
    ConsumedPlaythroughComponent,
    NewSingleArticleComponent,
    NewAlbumArticleComponent,
    ForlornEpComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ConsumedPlaythroughComponent,
    NewAlbumArticleComponent,
    NewSingleArticleComponent,
    ForlornEpComponent
  ]
})
export class ArticlesModule { }
