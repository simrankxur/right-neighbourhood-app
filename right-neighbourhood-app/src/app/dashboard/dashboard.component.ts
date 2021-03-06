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
  ) {
    const state = this._router.getCurrentNavigation()?.extras.state as any;

    if (state) {
      this.long = state?.long;
      this.lat = state?.lat;;
    }
  }

  public postcode: string = '';
  public postcodeData: PostcodeData | null = null;
  public long: string = '';
  public lat: string = '';
  public loading = false;
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  ngOnInit(): void {
    //Gets the postcode from the browser address.
    const postcode = this._route.snapshot.queryParamMap.get('postcode');

    if (postcode && this.long && this.lat) {
      this.postcode = postcode.toUpperCase();
      this.loading = true;

      //This calls the service method to load all API data.
      this._postcodeService.loadData(postcode, this.long, this.lat)
        .pipe(takeUntil(this.destroyed$))
        .subscribe(data => {
          this.postcodeData = data;     //Set the data once loaded.
          this.loading = false;
        });
    } else {
      this._router.navigate(['']);
    }
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
