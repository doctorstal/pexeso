import {Component, OnInit, ViewChildren} from '@angular/core';
import {BoardGameService, Card} from "../../services/board-game.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  cards$: Observable<Card[]>;

  constructor(private gameService: BoardGameService) {
    this.cards$ = this.gameService.cards$;
  }

  ngOnInit() {
  }

  cardClick(card: Card) {
    this.gameService.cardOpen$.next(card);
  }
}
