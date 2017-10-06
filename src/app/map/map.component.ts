import { Component, OnInit } from '@angular/core';

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

interface mapOptions {
  lat: number;
  lng: number;
  zoom: number;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent implements OnInit {

  ngOnInit() {}

  mapOptions: mapOptions = {
    lat:  46.482876,
    lng:  30.735535,
    zoom: 11
  };
  addresses: object;

  sectionTitle: string;
  adressArrayIndex: any;

  constructor() {
    this.sectionTitle = 'map.title';
    this.adressArrayIndex = this.arrayIndexClouser();

  	this.addresses = [
  	  {
  	  	title: this.adressArrayIndex()
  	  },
  	  {
  	  	title: this.adressArrayIndex()
  	  },
  	  {
  	  	title: this.adressArrayIndex()
  	  },
  	  {
  	  	title: this.adressArrayIndex()
  	  },
  	  {
  	  	title: this.adressArrayIndex()
  	  },
  	  {
  	  	title: this.adressArrayIndex()
  	  }
  	]
  }

   arrayIndexClouser() {
     let i = 0;
     return () => `map.addresses.${i++}`
   }

   markers: marker[] = [
	  {
  		lat: 46.482876,
  		lng: 30.735535,
  		draggable: false
	  },
	  {
  		lat: 46.395296,
  		lng: 30.731092,
  		draggable: false
	  },
	  {
  		lat: 46.477078,
  		lng: 30.731189,
  		draggable: false
	  },
	  {
      lat: 46.477237,
      lng: 30.740306,
      draggable: false
	  },
	  {
      lat: 46.583864,
      lng: 30.808094,
      draggable: false
	  },
	  {
      lat: 46.398258,
      lng: 30.726402,
      draggable: false 
	  }
  ];

  detectMarker(i) {
    this.mapOptions.lat  = this.markers[i].lat;
    this.mapOptions.lng  = this.markers[i].lng;
    this.mapOptions.zoom = 17;
  }
}
