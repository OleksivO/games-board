import {RouterModule, Routes} from '@angular/router';
import {GamesOverviewComponent} from './games-overview/games-overview.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: GamesOverviewComponent
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class LayoutRoutingModule {
}
