import { Component, OnInit } from '@angular/core';
import {PageScrollConfig}    from 'ng2-page-scroll';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  navigations: Array<object>;	

  constructor() { 
  	PageScrollConfig.defaultScrollOffset = 90;
  	PageScrollConfig.defaultDuration = 1000;
  	PageScrollConfig.defaultEasingLogic = {
        ease: (t: number, b: number, c: number, d: number): number => {
            // easeInOutExpo easing
            if (t === 0) return b;
            if (t === d) return b + c;
            if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        }
    };

  	this.navigations = [
  	  {
  	  	href: '#masthed',
  	  	title: 'главная'
  	  },
  	  {
  	  	href: '#promo',
  	  	title: 'акция'
  	  },
  	  {
  	  	href: '#technology',
  	  	title: 'технология'
  	  },
  	  {
  	  	href: '#service',
  	  	title: 'услуги'
  	  },
  	  {
  	  	href: '#map',
  	  	title: 'пункты приема'
  	  }
  	]
  }

  ngOnInit() {
  }

  navClick(i) {
  	console.log(i);
  }

}
