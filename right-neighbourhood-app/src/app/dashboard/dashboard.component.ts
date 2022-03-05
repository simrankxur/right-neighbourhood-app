import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    const postcode = this._route.snapshot.queryParamMap.get('postcode');

    if (postcode) {
      console.log(postcode);
    } else {
      this._router.navigate(['']);
    }

  }

}
