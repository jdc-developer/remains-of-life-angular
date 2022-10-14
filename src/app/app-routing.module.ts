import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BiographyComponent } from './pages/components/biography/biography.component';
import { HomeComponent } from './pages/components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'biography',
    component: BiographyComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
