import { Component, OnInit } from '@angular/core';

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent implements OnInit {

  ngOnInit() {}

  lat: number = 46.482876;
  lng: number = 30.735535;
  zoom: number = 11;
  addresses: object;

  block_title: string;
  array_index: any;
  map_legal: string;

  constructor() {
    this.block_title = 'map.title';
    this.array_index = this.arrayIndexClouser();
    this.map_legal = 'map.legal_text';


  	this.addresses = [
  	  {
  	  	title: this.array_index()
  	  },
  	  {
  	  	title: this.array_index()
  	  },
  	  {
  	  	title: this.array_index()
  	  },
  	  {
  	  	title: this.array_index()
  	  },
  	  {
  	  	title: this.array_index()
  	  },
  	  {
  	  	title: this.array_index()
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
		lat: 46.395277,
		lng: 30.731210,
		draggable: false
	  },
	  {
		lat: 46.477078,
		lng: 30.731189,
		draggable: false
	  },
	  {
	  	lat: 46.477544,
		lng: 30.739430,
		draggable: false
	  },
	  {
	  	lat: 46.583864,
		lng: 30.808094,
		draggable: false
	  },
	  {
	  	lat: 46.398737,
		lng: 30.725253,
		draggable: false
	  }
  ]
}
