import {Component, Input, OnInit} from '@angular/core';
import {GameFullInfo} from '../../../shared/models/game-info.model';

@Component({
  selector: 'gb-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {

  @Input() game: GameFullInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
