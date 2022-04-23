import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Rent } from '../dashboard/rent';

@Component({
  selector: 'app-rents',
  templateUrl: './rents.component.html',
  styleUrls: ['./rents.component.css']
})
export class RentsComponent implements OnInit, OnChanges {
  constructor() { }

  @Input() data: Rent[] | undefined;
  @Input() loading: boolean = false;

  filteredData: Rent[] | undefined;
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
      this.filteredData = allData?.filter(rent => rent.bedrooms >= 5);
    } else {
      this.filteredData = allData?.filter(rent => rent.bedrooms == Number(value));
    }
  }
}
