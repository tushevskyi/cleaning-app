import { Component, OnInit } 						              from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

const stateName = {
  ACTIVE: 'active',
  INACTIVE: 'inactive'
}

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.sass'],
  animations: [
    trigger('hoverImgText', [
      state('inactive', style({
        bottom: '20px'
      })),
      state('active', style({
        bottom: '50%'
      })),
      transition('inactive => active', animate('200ms ease-in')),
      transition('active => inactive', animate('200ms ease-in'))
    ]),
    trigger('hoverWave', [
      state('inactive', style({
        opacity: '0'
      })),
      state('active', style({
        opacity: '1'
      })),
      transition('inactive => active', animate('250ms ease')),
      transition('active => inactive', animate('250ms ease'))
    ]),
    trigger('hoverImgOverlay', [
      state('inactive', style({
        opacity: '0.7'
      })),
      state('active', style({
        opacity: '0'
      })),
      transition('inactive => active', animate('250ms ease')),
      transition('active => inactive', animate('250ms ease'))
    ])
  ]
})
export class PriceComponent implements OnInit {

  services_info: Array<{ img: string, id: string, img_text: string, state: string }>;
  makeId: any;
  wave: string;

  service_main_title: string;
  service_type: string;
  arr_index: any;

  constructor() {
    this.arr_index = this.arrIndexClosure();
    this.service_main_title = 'service.main_title';
    this.makeId = this.priceModalId();

  	this.wave = '/assets/svg/vesch_wave.svg';

  	this.services_info = [
	  	{
			  img:'/assets/img/price-img/coat.png',
			  id: `#portfolioModal${this.makeId()}`,
			  img_text: this.arr_index(),
			  state: stateName.INACTIVE
	  	},
	  	{
	  		img:'/assets/img/price-img/suite.png',
			  id: `#portfolioModal${this.makeId()}`,
			  img_text: this.arr_index(),
			  state: stateName.INACTIVE
	  	},
	  	{
	  		img:'/assets/img/price-img/fur.png',
			  id: `#portfolioModal${this.makeId()}`,
			  img_text: this.arr_index(),
			  state: stateName.INACTIVE
	  	},
	  	{
	  		img:'/assets/img/price-img/clothes.png',
			  id: `#portfolioModal${this.makeId()}`,
			  img_text: this.arr_index(),
			  state: stateName.INACTIVE
	  	},
	  	{
	  		img:'/assets/img/price-img/kids.png',
			  id: `#portfolioModal${this.makeId()}`,
			  img_text: this.arr_index(),
			  state: stateName.INACTIVE
	  	},
	  	{
	  		img:'/assets/img/price-img/carpet.png',
			  id: `#portfolioModal${this.makeId()}`,
			  img_text: this.arr_index(),
			  state: stateName.INACTIVE
	  	},
  	]
  }

  ngOnInit() {}

  priceModalId(): any {
    let i = 1;
    return () => i++;
  }

  isStateActive(i): boolean {
    return this.services_info[i].state === stateName.ACTIVE;
  }

  hoverAnimation(i): void {
  	this.services_info[i].state = this.isStateActive(i) ? stateName.INACTIVE : stateName.ACTIVE;
  }

  arrIndexClosure(): any {
    let i = 0;
    return () => `service.type.${i++}`;
  }

}
