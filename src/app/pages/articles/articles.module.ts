import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { NewAlbumArticleComponent } from './components/new-album-article/new-album-article.component';
import { NewSingleArticleComponent } from './components/new-single-article/new-single-article.component';
import { ConsumedPlaythroughComponent } from './components/consumed-playthrough/consumed-playthrough.component';


@NgModule({
  declarations: [
    ConsumedPlaythroughComponent,
    NewSingleArticleComponent,
    NewAlbumArticleComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ConsumedPlaythroughComponent,
    NewAlbumArticleComponent,
    NewSingleArticleComponent
  ]
})
export class ArticlesModule { }
