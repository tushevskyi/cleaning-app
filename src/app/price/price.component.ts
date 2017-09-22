import { Component, OnInit } 						  from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.sass'],
  animations: [
    trigger('hoverAnimation', [
      state('inactive', style({
        bottom: '20px'
      })),
      state('active', style({
        bottom: '50%'
      })),
      transition('inactive => active', animate('200ms ease-in')),
      transition('active => inactive', animate('200ms ease-in'))
    ])
  ]
})
export class PriceComponent implements OnInit {

  services_info: Array<{ img: string, id: string, img_text: string, state: string }>;
  makeId: any;
  wave: string;

  constructor() {
  	this.wave = '/assets/svg/vesch_wave.svg';
  	this.makeId = this.priceModalId();
  	this.services_info = [
	  	{
			img:'/assets/img/price-img/coat.png',
			id: `#portfolioModal${this.makeId()}`,
			img_text: 'верхняя одежда',
			state: 'inactive'
	  	},
	  	{
	  		img:'/assets/img/price-img/suite.png',
			id: `#portfolioModal${this.makeId()}`,
			img_text: 'деловая одежда',
			state: 'inactive'
	  	},
	  	{
	  		img:'/assets/img/price-img/fur.png',
			id: `#portfolioModal${this.makeId()}`,
			img_text: 'мех, кожа, дубленки',
			state: 'inactive'
	  	},
	  	{
	  		img:'/assets/img/price-img/clothes.png',
			id: `#portfolioModal${this.makeId()}`,
			img_text: 'одежда',
			state: 'inactive'
	  	},
	  	{
	  		img:'/assets/img/price-img/kids.png',
			id: `#portfolioModal${this.makeId()}`,
			img_text: 'KIDS',
			state: 'inactive'
	  	},
	  	{
	  		img:'/assets/img/price-img/carpet.png',
			id: `#portfolioModal${this.makeId()}`,
			img_text: 'домашний интерьер',
			state: 'inactive'
	  	},
  	]
  }

  ngOnInit() {}

  priceModalId() {
    let i = 1;
    return function() {
    	return i++;
    }  
  }

  hoverAnimation(i) {
  	this.services_info[i].state = (this.services_info[i].state === 'inactive' ? 'active' : 'inactive');
  }

}
