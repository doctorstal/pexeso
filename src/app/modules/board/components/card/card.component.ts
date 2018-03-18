import {Component, Input, OnInit} from '@angular/core';
import {ImageLoaderService} from "../image-loader.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() imageId: string;
  imageSource: string;

  constructor(private imageLoaderService: ImageLoaderService) { }

  ngOnInit() {
    this.imageSource = this.imageLoaderService.getSrc(this.imageId);
  }

}
