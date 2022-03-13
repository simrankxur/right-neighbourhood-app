import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReplaySubject, takeUntil } from 'rxjs';
import { PostcodeDataService } from '../postcode-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private _router: Router,
    private _postcodeService: PostcodeDataService,
  ) { }

  showErrorMsg = false;
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  ngOnInit(): void {
  }

  search(userPostcode: string): void {
    this.showErrorMsg = false;

    const postcodeData = this._postcodeService.loadLongAndLat(userPostcode)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(
        next => {
          const long = next.result.longitude;
          const lat = next.result.latitude;
  
          this._router.navigate(
            ['../search'],
            { queryParams: { postcode: userPostcode },
              state: { long: long, lat: lat }
            });
        },
        error => {
          this.showErrorMsg = true;
        });
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
