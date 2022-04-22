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

  search(userPostcode: string): void {    //Search method is called when the search button is executed.
    this.showErrorMsg = false;

    const postcodeData = this._postcodeService.loadLongAndLat(userPostcode)   
      .pipe(takeUntil(this.destroyed$))
      .subscribe(
        next => {
          const long = next.result.longitude;     //Service method returns the longitude and latitude of the postcode.
          const lat = next.result.latitude;
  
          this._router.navigate(      //Navigates to the next page.
            ['../search'],
            { queryParams: { postcode: userPostcode },    //The postcode is added to the browser address.
              state: { long: long, lat: lat }     //Longitude and Latitude is passed.
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
