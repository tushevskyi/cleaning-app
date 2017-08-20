import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  prices_info: Array<{ img: string, id: string }>;
  makeId: any;

  constructor() {
  	this.makeId = this.priceModalId();
  	this.prices_info = [
	  	{
			img:'/assets/img/price-img/cabin.png',
			id: `#portfolioModal${this.makeId()}`
	  	},
	  	{
	  		img:'/assets/img/price-img/circus.png',
			id: `#portfolioModal${this.makeId()}`
	  	},
	  	{
	  		img:'/assets/img/price-img/cake.png',
			id: `#portfolioModal${this.makeId()}`
	  	},
	  	{
	  		img:'/assets/img/price-img/game.png',
			id: `#portfolioModal${this.makeId()}`
	  	},
	  	{
	  		img:'/assets/img/price-img/safe.png',
			id: `#portfolioModal${this.makeId()}`
	  	},
	  	{
	  		img:'/assets/img/price-img/submarine.png',
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
