import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { NewAlbumArticleComponent } from './components/new-album-article/new-album-article.component';
import { NewSingleArticleComponent } from './components/new-single-article/new-single-article.component';


@NgModule({
  declarations: [
    NewSingleArticleComponent,
    NewAlbumArticleComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    NewAlbumArticleComponent,
    NewSingleArticleComponent
  ]
})
export class ArticlesModule { }
