import { Component, Input, OnInit } from '@angular/core';
import { Price } from '../dashboard/price';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {
  constructor() { }

  @Input() data: Price[] | undefined;

  ngOnInit(): void {
  }

}
