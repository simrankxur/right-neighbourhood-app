import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable, of } from 'rxjs';
import { PostcodeData } from './dashboard/postcode-data';

@Injectable({
  providedIn: 'root'
})
export class PostcodeDataService {
  constructor(
    private http: HttpClient
  ) { }

  private readonly apiKey = 'I5T3BNTWP6';
  private testPostcode = 'B4 7ET';

  loadData(postcode: string): Observable<PostcodeData> {
    // if (postcode == this.testPostcode) {
    //   const storedData = {} as PostcodeData;
    //   storedData.crime = this.testPostcodeStoredCrimeData();
    //   storedData.restaurants = this.testPostcodeStoredRestaurantData();
    //   return of(storedData);
    // }

    // make API calls
    const crime = this.getCrimeData(postcode);
    const restaurants = this.getRestaurantData(postcode);

    return forkJoin([crime, restaurants]).pipe(map(results => {
      return {
        crime: results[0],
        restaurants: results[1].data as string,
      } as PostcodeData;
    }));
  }

  private getCrimeData(postcode: string): Observable<any> {
    // const url = `https://api.propertydata.co.uk/crime?key=${this.apiKey}&postcode=${postcode}`;
    // return this.http.get<string>(url);
    return of('...');
  }

  private getRestaurantData(postcode: string): Observable<any> {
    const url = `https://api.propertydata.co.uk/restaurants?key=${this.apiKey}&postcode=${postcode}`;
    return this.http.get<string>(url);
  }

  private testPostcodeStoredCrimeData(): string {
    return '';
  }

  private testPostcodeStoredRestaurantData(): string {
    return '';
  }
}
