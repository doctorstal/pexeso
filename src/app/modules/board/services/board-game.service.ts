import {Injectable} from '@angular/core';
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

  public cardOpen$: Subject<Card> = new Subject();

  constructor() {
    this.cardOpen$
      .pipe(
        filter(card => !card.opened),
        tap(card => card.opened = true),
        delayWhen(() =>
          this.cardOpen$.pipe(
            skip(1),
            merge(Observable.interval(2000))
          )),
        tap(card => card.opened = false)
      )
      .subscribe();
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
