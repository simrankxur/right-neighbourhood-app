import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {} from 'googlemaps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  constructor() { }

  @Input() long: string | undefined;
  @Input() lat: string | undefined;

  @ViewChild('map', {static: true}) mapElement: any;
  map: google.maps.Map | undefined;

  longNumber: number | undefined;
  latNumber: number | undefined;

  ngOnInit(): void {
    //Convert long and lat strings to numbers.
    this.longNumber = Number(this.long);
    this.latNumber = Number(this.lat);

    //Sets properties for Google Maps.
    const mapProperties = {
      center: new google.maps.LatLng(this.latNumber, this.longNumber),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement?.nativeElement, mapProperties);

    //Adds transport links to the map.
    const transitLayer = new google.maps.TransitLayer();
    transitLayer.setMap(this.map);
  }

}
