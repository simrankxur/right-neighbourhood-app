import { Component, Input, OnInit } from '@angular/core';
import { Crime } from '../dashboard/crime';

@Component({
  selector: 'app-crime',
  templateUrl: './crime.component.html',
  styleUrls: ['./crime.component.css']
})
export class CrimeComponent implements OnInit {
  constructor() { }

  @Input() data: Crime[] | undefined;

  ngOnInit(): void {
  }

}
