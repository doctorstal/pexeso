import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './components/statistics/statistics.component';
import {StatisticsService} from "./services/statistics.service";
import { RestartButtonComponent } from './components/restart-button/restart-button.component';
import {AppStateService} from "./services/app-state.service";

@NgModule({
  imports: [
    CommonModule
  ],
  providers:[ StatisticsService, AppStateService],
  exports: [StatisticsComponent, RestartButtonComponent],
  declarations: [StatisticsComponent, RestartButtonComponent]
})
export class InterfaceModule { }
