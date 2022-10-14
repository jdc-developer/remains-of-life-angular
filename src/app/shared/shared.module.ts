import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { SideContentComponent } from './components/side-content/side-content.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    SideContentComponent
  ],
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      defaultLanguage: 'pt-BR',
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
  ],
  exports: [
    CommonModule,
    SideContentComponent,
    TranslateModule
  ]
})
export class SharedModule { }
