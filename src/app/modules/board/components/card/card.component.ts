import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ImageLoaderService} from "../image-loader.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() imageId: string;
  @Input() opened: boolean = false;
  @Output() cardClick: EventEmitter<void> = new EventEmitter();

  imageSource: string;

  constructor(private imageLoaderService: ImageLoaderService) { }

  ngOnInit() {
    this.imageSource = this.imageLoaderService.getSrc(this.imageId);
  }

  onClick() {
    this.cardClick.emit();
  }

}
