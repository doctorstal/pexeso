import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {BoardModule} from "./modules/board/board.module";
import {InterfaceModule} from "./modules/interface/interface.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BoardModule,
    InterfaceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
