import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ImageLoaderService} from "../image-loader.service";
import {Card} from "../../services/board-game.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: Card;
  @Output() cardClick: EventEmitter<void> = new EventEmitter();

  imageSource: string;

  constructor(private imageLoaderService: ImageLoaderService) { }

  ngOnInit() {
    this.imageSource = this.imageLoaderService.getSrc(this.card.id);
  }

  onClick() {
    this.cardClick.emit();
  }

}
