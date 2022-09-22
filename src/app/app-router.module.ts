import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from './sales/pages/basics/basics.component';
import { NumbersComponent } from './sales/pages/numbers/numbers.component';
import { NotCommonsComponent } from './sales/pages/not-commons/not-commons.component';
import { SortComponent } from './sales/pages/sort/sort.component';

const routes: Routes = [
  {
    path: '',
    component: BasicsComponent,
    pathMatch: 'full',
  },
  {
    path: 'numbers',
    component: NumbersComponent,
  },
  {
    path: 'not-commons',
    component: NotCommonsComponent,
  },
  {
    path: 'sort',
    component: SortComponent,
  },
  {
    path: '**',
    component: BasicsComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
