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
    this.cards = this.gameService.getCards(16);
  }

  ngOnInit() {
  }

  cardClick(card: Card) {
    card.opened = !card.opened;
  }
}
