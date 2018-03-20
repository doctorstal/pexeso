import {
  EventEmitter,
  Injectable
} from '@angular/core';
import {Subject} from "rxjs/Subject";
import {
  delayWhen,
  filter,
  merge,
  skip,
  tap
} from "rxjs/operators";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/interval";

@Injectable()
export class BoardGameService {
  private cards: Card[];
  private openedCard: Card;

  public cardOpen$: Subject<Card> = new Subject();
  public guessedCards$: EventEmitter<Card[]> = new EventEmitter();

  constructor() {
    this.cardOpen$
      .pipe(
        filter(card => !card.opened),
        tap(card => this.openCard(card)),
        delayWhen(() =>
          this.cardOpen$.pipe(
            skip(1),
            merge(Observable.interval(2000))
          )),
        filter(card => !card.guessed),
        tap(card => this.closeCard(card))
      )
      .subscribe();
  }

  openCard(card: Card) {
    card.opened = true;

    if (this.openedCard && this.openedCard.id === card.id) {
      this.markCardsGuessed(card, this.openedCard);
      this.openedCard = null;
    } else {
      this.openedCard = card;
    }
  }

  private markCardsGuessed(card1: Card, card2) {
    card1.guessed = true;
    card2.guessed = true;
    this.guessedCards$.emit([card1, card2]);
  }

  closeCard(card: Card) {
    card.opened = false;
    if (this.openedCard === card) {
      this.openedCard = null;
    }
  }

  restart(num: number) {
    let range = Array.from(Array(num / 2).keys());
    this.cards = shuffle(
      range
        .concat(range)
        .map(n => new Card(n.toString()))
    );
  }

  getCards(): Card[] {
    return this.cards;
  }
}

export class Card {
  public opened: boolean = false;
  public guessed: boolean = false;

  constructor(public id: string) {
  }
}

// Fisher-Yates Shuffle
function shuffle(array: any[]) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}
