import { Component, Input, OnInit } from '@angular/core';
import { Rent } from '../dashboard/rent';

@Component({
  selector: 'app-rents',
  templateUrl: './rents.component.html',
  styleUrls: ['./rents.component.css']
})
export class RentsComponent implements OnInit {
  constructor() { }

  @Input() data: Rent[] | undefined;

  filteredData: Rent[] | undefined;
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
      this.filteredData = allData?.filter(rent => rent.bedrooms >= 5);
    } else {
      this.filteredData = allData?.filter(rent => rent.bedrooms == Number(value));
    }
  }
}
