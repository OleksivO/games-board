import {GameFullInfo, GameInfo} from '../models/game-info.model';
import {JackpotInfo} from '../models/jackpot-info.model';

export const toGameFullInfo = (game: GameInfo, jackpotsInfo: JackpotInfo[], category: string): GameFullInfo => {
  const gamesJackpot: JackpotInfo = jackpotsInfo.find(jackpot => jackpot.game === game.id);
  return {
    ...game,
    image: game.image.replace('//', 'https://'),
    jackpot: gamesJackpot ? gamesJackpot.amount : null,
    highlightedCategory: setGameHighlightCategory(game.categories, category).toUpperCase()
  };
};

export const setGameHighlightCategory = (categories: string[], category: string): string => {
  const isNew = categories.includes('new');
  const isTop = categories.includes('top');

  if (category === 'top' && isNew) {
    return 'New';
  }

  if (category === 'new' && isTop) {
    return 'Top';
  }

  if (category !== 'top' && category !== 'new') {
    return isTop ? 'top' : isNew ? 'new' : '';
  }

  return '';
};
