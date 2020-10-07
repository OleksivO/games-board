export interface GameInfo {
  id: string;
  name: string;
  image: string;
  categories: Array<string>;
}

export interface GameFullInfo extends GameInfo {
  jackpot: number;
  highlightedCategory: string;
}
