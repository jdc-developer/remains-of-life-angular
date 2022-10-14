import { Component, OnInit } from '@angular/core';

import { Route } from '../models/route';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  routes: Array<Route> = [];

  constructor() { }

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

}
