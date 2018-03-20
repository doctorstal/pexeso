import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './components/statistics/statistics.component';
import {StatisticsService} from "./services/statistics.service";

@NgModule({
  imports: [
    CommonModule
  ],
  providers:[ StatisticsService],
  exports: [StatisticsComponent],
  declarations: [StatisticsComponent]
})
export class InterfaceModule { }
