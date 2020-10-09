import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, combineLatest, empty, interval, Observable, of} from 'rxjs';
import {catchError, filter, map, startWith, switchMap} from 'rxjs/operators';
import {GameFullInfo, GameInfo} from '../../shared/models/game-info.model';
import {toGameFullInfo} from '../../shared/utils/game-info.converter';
import {JackpotInfo} from '../../shared/models/jackpot-info.model';

const JACKPOTS_API = 'https://stage.whgstage.com/front-end-test/jackpots.php';
const GAMES_API = 'https://stage.whgstage.com/front-end-test/games.php';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private selectedCategory$: BehaviorSubject<string> = new BehaviorSubject<string>('new');
  constructor(private httpClient: HttpClient) {}

  getFullGamesInfo(): Observable<GameFullInfo[]> {
    return combineLatest(this.fetchGames(), this.fetchJackpots(), this.selectedCategory$).pipe(
      filter(([games, jackpots, category]) => !!games && !!jackpots),
      map(([games, jackpots, category]) => this.getFilteredGames(games.map(game => toGameFullInfo(game, jackpots, category)), category))
    );
  }

  getSelectedCategory(): Observable<string> {
    return this.selectedCategory$.asObservable();
  }

  setSelectedCategory(category: string): void {
    this.selectedCategory$.next(category);
  }

  private getFilteredGames(games: GameFullInfo[], category: string): GameFullInfo[] {
    switch (category) {
      case 'other': {
        return games.filter(game => {
          return game.categories.includes('ball') ||
            game.categories.includes('virtual') ||
            game.categories.includes('fun');
        });
      }
      case 'jackpots': {
        return games.filter(game => !!game.jackpot);
      }
      default: {
        return games.filter(game => game.categories.includes(category));
      }
    }
  }

  private fetchGames(): Observable<GameInfo[]> {
    return this.httpClient.get<GameInfo[]>(GAMES_API).pipe(
      catchError(error => {
        console.error('Problem with fetching games', error);
        return of([]);
      })
    );
  }

  private fetchJackpots(): Observable<JackpotInfo[]> {
    // Fetch the jackpots every 5 seconds
    // startWith(0) is needed to start interval immediately
    return interval(5000).pipe(
      startWith(0),
      switchMap(() => this.httpClient.get<JackpotInfo[]>(JACKPOTS_API)),
      catchError(error => {
        console.error('Problem with fetching jackpots', error);
        return of([]);
      })
    );
  }
}
