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
    if (postcode.toUpperCase() == this.testPostcode) {
      const storedData = {} as PostcodeData;
      storedData.crime = this.testPostcodeStoredCrimeData();
      storedData.restaurants = this.testPostcodeStoredRestaurantData();
      return of(storedData);
    }

    // make API calls
    const crime = this.getCrimeData(postcode);
    const restaurants = this.getRestaurantData(postcode);

    return forkJoin([crime, restaurants]).pipe(map(results => {
      return {
        crime: results[0],
        restaurants: results[1].data.nearby as string,
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
    return `[ { "name": "Tesco", "address": "Aston University, Unit A Block D, The Aston Triangle", "type": "Retailers - other", "hygiene": null, "rating_date": "2019-01-11T00:00:00.000000Z", "lat": "52.48665130", "lng": "-1.89094710", "distance": "0.00" }, { "name": "B4 Bar", "address": "Subway, Aston Students Guild, 60 Aston Street, Birmingham", "type": "Restaurant/Cafe/Canteen", "hygiene": 5, "rating_date": "2018-11-16T00:00:00.000000Z", "lat": "52.48664600", "lng": "-1.89096600", "distance": "0.00" }, { "name": "Cafe Tierra", "address": "Aston University, Aston Street, Birmingham", "type": "Restaurant/Cafe/Canteen", "hygiene": 5, "rating_date": "2017-03-24T00:00:00.000000Z", "lat": "52.48664600", "lng": "-1.89096600", "distance": "0.00" }, { "name": "Costa Coffee", "address": "Aston University, Aston Street, Birmingham", "type": "Restaurant/Cafe/Canteen", "hygiene": 5, "rating_date": "2017-03-01T00:00:00.000000Z", "lat": "52.48664600", "lng": "-1.89096600", "distance": "0.00" }, { "name": "John Smith Guild Shop", "address": "Ground Floor, Aston Students Guild, 60 Aston Street, Birmingham", "type": "Retailers - other", "hygiene": 4, "rating_date": "2020-03-01T00:00:00.000000Z", "lat": "52.48664600", "lng": "-1.89096600", "distance": "0.00" }, { "name": "Rio's Piri Piri", "address": "Unit-4 the Old Fire Station, Aston Street, Birmingham", "type": "Restaurant/Cafe/Canteen", "hygiene": 5, "rating_date": "2020-09-30T23:00:00.000000Z", "lat": "52.48578262", "lng": "-1.89077699", "distance": "0.06" }, { "name": "Stars", "address": "83 Aston Street, Birmingham", "type": "Retailers - other", "hygiene": 5, "rating_date": "2020-03-01T00:00:00.000000Z", "lat": "52.48578200", "lng": "-1.89077600", "distance": "0.06" }, { "name": "Cafe Pause", "address": "Birmingham City Council, 1 Lancaster Circus Queensway, Birmingham", "type": "Restaurant/Cafe/Canteen", "hygiene": 5, "rating_date": "2018-03-22T00:00:00.000000Z", "lat": "52.48704200", "lng": "-1.89220200", "distance": "0.06" }, { "name": "Greggs Unit 2", "address": "67 Aston Street, Birmingham", "type": "Takeaway/sandwich shop", "hygiene": 5, "rating_date": "2018-10-30T00:00:00.000000Z", "lat": "52.48564810", "lng": "-1.89097790", "distance": "0.07" }, { "name": "Wok & Go", "address": "66 Aston Street, Birmingham", "type": "Takeaway/sandwich shop", "hygiene": 3, "rating_date": "2020-11-10T00:00:00.000000Z", "lat": "52.48559720", "lng": "-1.89106980", "distance": "0.07" }, { "name": "Pizza Hut Delivery", "address": "71 Lancaster Street, Birmingham", "type": "Takeaway/sandwich shop", "hygiene": 5, "rating_date": "2017-11-16T00:00:00.000000Z", "lat": "52.48729324", "lng": "-1.89292300", "distance": "0.09" }, { "name": "Brgri", "address": "Ben Jonson, 275 Corporation Street, Nechells", "type": "Restaurant/Cafe/Canteen", "hygiene": null, "rating_date": "2019-01-11T00:00:00.000000Z", "lat": "52.48785782", "lng": "-1.89147401", "distance": "0.09" }, { "name": "The Sack Of Potatoes", "address": "Sack Of Potatoes, 10 Gosta Green, Birmingham", "type": "Pub/bar/nightclub", "hygiene": 5, "rating_date": "2018-02-06T00:00:00.000000Z", "lat": "52.48741600", "lng": "-1.88829800", "distance": "0.12" }, { "name": "Aston Way Service Station", "address": "305 Corporation Street, Nechells, Birmingham", "type": "Retailers - other", "hygiene": 5, "rating_date": "2018-03-01T00:00:00.000000Z", "lat": "52.48882100", "lng": "-1.89104900", "distance": "0.15" }, { "name": "Chicken Hut", "address": "201 Corporation Street, Ladywood, Birmingham", "type": "Takeaway/sandwich shop", "hygiene": 4, "rating_date": "2018-08-19T23:00:00.000000Z", "lat": "52.48434600", "lng": "-1.89281200", "distance": "0.18" }, { "name": "Aunt Sally", "address": "193 Corporation Street, Ladywood, Birmingham", "type": "Takeaway/sandwich shop", "hygiene": 4, "rating_date": "2020-01-29T00:00:00.000000Z", "lat": "52.48434600", "lng": "-1.89281200", "distance": "0.18" }, { "name": "Bubble Waffles", "address": "195-199 Corporation Street, Ladywood, Birmingham", "type": "Restaurant/Cafe/Canteen", "hygiene": 2, "rating_date": "2020-03-05T00:00:00.000000Z", "lat": "52.48434600", "lng": "-1.89281200", "distance": "0.18" }, { "name": "Aisa Try It Love It", "address": "5 Ryder Street, Birmingham", "type": "Restaurant/Cafe/Canteen", "hygiene": null, "rating_date": "2019-02-14T00:00:00.000000Z", "lat": "52.48391950", "lng": "-1.89222020", "distance": "0.20" }, { "name": "The Campus Shop", "address": "Curzon Building, 4 Cardigan Street, Birmingham", "type": "Retailers - other", "hygiene": 4, "rating_date": "2020-03-01T00:00:00.000000Z", "lat": "52.48981900", "lng": "-1.89165000", "distance": "0.22" }, { "name": "Benugo Ltd", "address": "Curzon Building, 4 Cardigan Street, Birmingham", "type": "Hospitals/Childcare/Caring Premises", "hygiene": 5, "rating_date": "2018-04-29T23:00:00.000000Z", "lat": "52.48981900", "lng": "-1.89165000", "distance": "0.22" } ]`;
  }
}
