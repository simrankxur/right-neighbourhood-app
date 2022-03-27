import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  constructor() { }

  @Input() jsonData: string | undefined;

  ngOnInit(): void {
  }

}
