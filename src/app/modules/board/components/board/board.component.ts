import {Component, OnInit, ViewChildren} from '@angular/core';
import {BoardGameService, Card} from "../../services/board-game.service";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  cards: Card[];

  constructor(private gameService: BoardGameService) {
    this.gameService.restart(16);
    this.cards = this.gameService.getCards();
  }

  ngOnInit() {
  }

  cardClick(card: Card) {
    this.gameService.cardOpen$.next(card);
  }
}
