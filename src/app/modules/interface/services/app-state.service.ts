import { Injectable } from '@angular/core';
import {BoardGameService} from "../../board/services/board-game.service";
import {StatisticsService} from "./statistics.service";
import {ImageLoaderService} from "../../board/components/image-loader.service";

@Injectable()
export class AppStateService {

  constructor(private boardGame: BoardGameService,
              private statistics: StatisticsService,
              private imageLoader: ImageLoaderService) {
    this.restart(20, 'lego');
  }

  restart(pairs: number, keyword: string) {
    this.imageLoader.setKeyword(keyword);
    this.boardGame.restart(pairs * 2);
    this.statistics.restart();

  }
}
