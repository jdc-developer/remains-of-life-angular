import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { EN_LOCALE, PT_BR_LOCALE } from 'src/app/shared/constants/constants';

import { Route } from '../models/route';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  portugueseLocales: Array<string> = ['pt-BR', 'pt-PT', 'pt-AO', 'pt-MZ', 'pt-GW', 'pt-GQ', 'pt-ST',
        'pt-TL', 'pt-CV', 'pt'];
  routes: Array<Route> = [];

  constructor(private translateService: TranslateService) {
    const userLang = navigator.language;

    if (this.portugueseLocales.includes(userLang)) {
      this.translateService.use(PT_BR_LOCALE);
    }
  }

  ngOnInit(): void {
    this.routes.push(
      {
        path: '/',
        translatorKey: 'HOME'
      },
      {
        path: '/biography',
        translatorKey: 'BIOGRAPHY'
      },
      {
        path: '/photos',
        translatorKey: 'PHOTOS'
      },
      {
        path: '/videos',
        translatorKey: 'VIDEOS'
      }
    );
  }

  changeToPortuguese(): void {
    this.translateService.use(PT_BR_LOCALE);
  }

  changeToEnglish(): void {
    this.translateService.use(EN_LOCALE);
  }

}
