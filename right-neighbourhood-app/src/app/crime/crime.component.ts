import { Component, Input, OnInit } from '@angular/core';
import { Crime } from '../dashboard/crime';

@Component({
  selector: 'app-crime',
  templateUrl: './crime.component.html',
  styleUrls: ['./crime.component.css']
})
export class CrimeComponent implements OnInit {
  constructor() { }

  //Input property for crime data.
  @Input() data: Crime[] | undefined;
  @Input() loading: boolean = false;

  ngOnInit(): void {
  }

}
