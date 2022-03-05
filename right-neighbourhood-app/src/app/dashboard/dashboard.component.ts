import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReplaySubject, takeUntil } from 'rxjs';
import { PostcodeDataService } from '../postcode-data.service';
import { PostcodeData } from './postcode-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _postcodeService: PostcodeDataService,
  ) { }

  public postcodeData: PostcodeData | null = null;
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  ngOnInit(): void {
    const postcode = this._route.snapshot.queryParamMap.get('postcode');

    if (postcode) {
      console.log(postcode);

      // uncomment to test
      // this._postcodeService.loadData(postcode)
      //   .pipe(takeUntil(this.destroyed$))
      //   .subscribe(data => {
      //     this.postcodeData = data;

      //     console.log(data.restaurants);
      //   });
    } else {
      this._router.navigate(['']);
    }

  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
