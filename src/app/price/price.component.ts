import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.sass']
})
export class PriceComponent implements OnInit {

  prices_info: Array<{ img: string, id: string }>;
  makeId: any;

  constructor() {
  	this.makeId = this.priceModalId();
  	this.prices_info = [
	  	{
			img:'/assets/img/price-img/coat.png',
			id: `#portfolioModal${this.makeId()}`
	  	},
	  	{
	  		img:'/assets/img/price-img/suite.png',
			id: `#portfolioModal${this.makeId()}`
	  	},
	  	{
	  		img:'/assets/img/price-img/fur.png',
			id: `#portfolioModal${this.makeId()}`
	  	},
	  	{
	  		img:'/assets/img/price-img/clothes.png',
			id: `#portfolioModal${this.makeId()}`
	  	},
	  	{
	  		img:'/assets/img/price-img/kids.png',
			id: `#portfolioModal${this.makeId()}`
	  	},
	  	{
	  		img:'/assets/img/price-img/carpet.png',
			id: `#portfolioModal${this.makeId()}`
	  	},
  	]
  }

  priceModalId() {
    let i = 1;
    
    return function() {
    	return i++;
    }
    
}

  ngOnInit() {

  }

}
