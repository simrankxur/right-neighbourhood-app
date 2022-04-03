import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from '../dashboard/restaurant';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  constructor() { }

  @Input() data: Restaurant[] | undefined;

  ngOnInit(): void {
  }

}
