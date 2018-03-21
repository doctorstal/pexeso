import { Injectable } from '@angular/core';
import {BoardGameService} from "../../board/services/board-game.service";
import {Observable} from "rxjs/Observable";
import {
  filter,
  map,
  merge,
  tap
} from "rxjs/operators";
import {Subject} from "rxjs/Subject";

@Injectable()
export class StatisticsService {
  change$: Observable<Stats>;

  private restart$: Subject<void> = new Subject();

  currentStats: Stats;

  constructor(private gameService: BoardGameService) {
    let flips$ = gameService
      .cardOpen$.pipe(
        tap(() => this.currentStats.flips++)
      );
    let score$ = gameService
      .guessedCards$.pipe(
        tap(() => this.currentStats.score++)
      );
    this.restart$
      .subscribe(() => this.currentStats = { score: 0, flips: 0 });

    this.change$ = flips$.pipe(
        merge(score$),
        merge(this.restart$),
        map(() => this.currentStats),
      );
  }

  restart() {
    this.restart$.next();
  }
}

export type Stats = {
  score: number,
  flips: number
}
