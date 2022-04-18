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

  filteredData: Price[] | undefined;
  selected = '';

  ngOnInit(): void {
    this.filteredData = this.data;
  }

  formatType(type: string): string {
    return type.replace(/_/g, ' ');
  }

  bedroomsFilterChange(select: any) {
    let allData = this.data?.slice();
    let value = select.value;

    if (value == 'all') {
      this.filteredData = allData?.slice();
    } else if (value == '5+') {
      this.filteredData = allData?.filter(price => price.bedrooms >= 5);
    } else {
      this.filteredData = allData?.filter(price => price.bedrooms == Number(value));
    }
  }
}
