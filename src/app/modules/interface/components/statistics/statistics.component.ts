import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {Subject} from "rxjs/Subject";
import {StatisticsService} from "../../services/statistics.service";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit, OnDestroy {

  score: number = 0;
  flips: number = 0;
  private $destroyed: Subject<void> = new Subject();

  constructor(private statistics: StatisticsService) {
    statistics.change$
      .pipe(takeUntil(this.$destroyed))
      .subscribe(stats => {
        this.score = stats.score;
        this.flips = stats.flips;
      })
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.$destroyed.next();
    this.$destroyed.complete();
  }

}
