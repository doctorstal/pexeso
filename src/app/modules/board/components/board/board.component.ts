import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  rows: string[][];

  constructor() {
    this.rows = [
      ['1','2','2','3'],
      ['4','1','4','5'],
      ['6','7','8','3'],
      ['7','5','6','8'],
    ];
  }

  ngOnInit() {
  }

}
