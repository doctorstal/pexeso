import { Injectable } from '@angular/core';
import {BoardGameService} from "../../board/services/board-game.service";
import {Observable} from "rxjs/Observable";
import {
  map,
  merge,
  tap
} from "rxjs/operators";

@Injectable()
export class StatisticsService {
  change$: Observable<Stats>;

  currentStats: Stats = { score: 0, flips: 0 };

  constructor(private gameService: BoardGameService) {
    let flips$ = gameService
      .cardOpen$.pipe(
        tap(() => this.currentStats.flips++)
      );
    let score$ = gameService
      .guessedCards$.pipe(
        tap(() => this.currentStats.score++)
      );
    this.change$ = flips$.pipe(
        merge(score$),
        map(() => this.currentStats)
      )
  }

}

export type Stats = {
  score: number,
  flips: number
}
