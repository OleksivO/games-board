import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'gb-games-categories',
  templateUrl: './games-categories.component.html',
  styleUrls: ['./games-categories.component.scss']
})
export class GamesCategoriesComponent {
  categories: Array<{title: string, value: string}> = [
    {
      title: 'New Games',
      value: 'new'
    },
    {
      title: 'Top Games',
      value: 'top'
    },
    {
      title: 'Slots',
      value: 'slots'
    },
    {
      title: 'Jackpots',
      value: 'jackpots'
    },
    {
      title: 'Live',
      value: 'live'
    },
    {
      title: 'Blackjack',
      value: 'blackjack'
    },
    {
      title: 'Roulette',
      value: 'roulette'
    },
    {
      title: 'Table',
      value: 'table'
    },
    {
      title: 'Poker',
      value: 'poker'
    },
    {
      title: 'Other',
      value: 'other'
    }
  ];
  @Input() selectedCategory;
  @Output() selectCategory: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  onCategorySelect(value: string): void {
    this.selectCategory.emit(value);
  }
}
