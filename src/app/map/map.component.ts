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

  constructor() {
  	this.addresses = [
  	  {
  	  	title: 'ТРЦ Афина, площадь Греческая, 3/4,'
  	  },
  	  {
  	  	title: 'Фитнес-центр Форма, Люстдорфская дорога,172'
  	  },
  	  {
  	  	title: 'Преображенская,43'
  	  },
  	  {
  	  	title: 'Ришельевская,32'
  	  },
  	  {
  	  	title: 'Бочарова 44'
  	  },
  	  {
  	  	title: 'Кинотеатр «Золотой Дюк», проспект Академика Глушко 11Ж'
  	  }
  	]
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