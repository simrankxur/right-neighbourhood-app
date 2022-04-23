import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Price } from '../dashboard/price';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit, OnChanges {
  constructor() { }

  @Input() data: Price[] | undefined;
  @Input() loading: boolean = false;

  filteredData: Price[] | undefined;
  selected = '';

  ngOnInit(): void {
    this.filteredData = this.data;
  }

  //When inputs changed set data.
  ngOnChanges(): void {
    this.filteredData = this.data;
  }

  //Removes underscores from property type and replaces with space.
  formatType(type: string): string {
    return type.replace(/_/g, ' ');
  }

  //Filters data following dropdown value change.
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
