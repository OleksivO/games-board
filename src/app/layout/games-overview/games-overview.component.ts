import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {GamesService} from '../services/games.service';
import {GameFullInfo} from '../../shared/models/game-info.model';

@Component({
  selector: 'gb-games-overview',
  templateUrl: './games-overview.component.html',
  styleUrls: ['./games-overview.component.scss']
})
export class GamesOverviewComponent {

  selectedCategory$: Observable<string> = this.gamesService.getSelectedCategory();
  games$: Observable<GameFullInfo[]> = this.gamesService.getFullGamesInfo();

  constructor(private gamesService: GamesService) { }

  onCategorySelect(category: string): void {
    this.gamesService.setSelectedCategory(category);
  }

}
