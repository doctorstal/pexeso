import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './components/board/board.component';
import { CardComponent } from './components/card/card.component';
import {ImageLoaderService} from "./components/image-loader.service";
import {BoardGameService} from "./services/board-game.service";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [BoardComponent],
  providers: [
    ImageLoaderService,
    BoardGameService
  ],
  declarations: [BoardComponent, CardComponent]
})
export class BoardModule { }
