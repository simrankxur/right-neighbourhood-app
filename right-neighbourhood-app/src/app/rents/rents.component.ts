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

  ngOnInit(): void {
  }

}
