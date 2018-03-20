import { Component, OnInit } from '@angular/core';
import {AppStateService} from "../../services/app-state.service";

@Component({
  selector: 'app-restart-button',
  templateUrl: './restart-button.component.html',
  styleUrls: ['./restart-button.component.scss']
})
export class RestartButtonComponent implements OnInit {

  constructor(private appState: AppStateService) { }

  ngOnInit() {
  }

  onRestartClick() {
    this.appState.restart();
  }
}
