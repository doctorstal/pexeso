import {Injectable} from '@angular/core';

@Injectable()
export class BoardGameService {

  constructor() {
  }

  getCards(num): Card[] {
    let range =  Array.from(Array(num/2).keys());
    return shuffle(
      range
        .concat(range)
        .map(n => new Card(n.toString()))
    );
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
