import {Component, OnInit} from '@angular/core';
import {BoardGameService, Card} from "../../services/board-game.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  cards$: Observable<Card[]>;
  cardsLoaded: number;
  totalCards: number;

  constructor(private gameService: BoardGameService) {
    this.cards$ = this.gameService.cards$;
    this.cards$.forEach(cards=> {
      this.cardsLoaded = 0;
      this.totalCards = cards.length;
    })
  }

  ngOnInit() {
  }

  cardClick(card: Card) {
    this.gameService.cardOpen$.next(card);
  }

  imageLoad() {
    this.cardsLoaded++;
  }
}
