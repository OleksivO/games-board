import {NgModule} from '@angular/core';
import {GamesOverviewComponent} from './games-overview/games-overview.component';
import {GamesListComponent} from './games-overview/games-list/games-list.component';
import {GamesCategoriesComponent} from './games-overview/games-categories/games-categories.component';
import {LayoutRoutingModule} from './layout.routing.module';
import {CommonModule} from '@angular/common';
import {GameCardComponent} from './games-overview/game-card/game-card.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  declarations: [
    GamesOverviewComponent,
    GamesListComponent,
    GamesCategoriesComponent,
    GameCardComponent
  ]
})
export class LayoutModule {
}
