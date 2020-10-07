import {Component, Input, OnInit} from '@angular/core';
import {GameFullInfo} from '../../../shared/models/game-info.model';

@Component({
  selector: 'gb-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {
  @Input() games: GameFullInfo[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
