import { Injectable } from '@angular/core';
import {BoardGameService} from "../../board/services/board-game.service";
import {StatisticsService} from "./statistics.service";

@Injectable()
export class AppStateService {

  constructor(private boardGame: BoardGameService, private statistics: StatisticsService) {
    this.restart();
  }

  restart() {
    this.boardGame.restart(40);
    this.statistics.restart();

  }
}
