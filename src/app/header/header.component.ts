import { Component, OnInit } from '@angular/core';
import { PageScrollConfig }  from 'ng2-page-scroll';
import { TranslateService }  from '@ngx-translate/core';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  @ViewChild('navbarToggler') navbarToggler:ElementRef;
  
  navigations: Array<object>;
  lenguages: object;
  isCollapsed: boolean = false;

  constructor(private translate: TranslateService) { 
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

    translate.addLangs(['ru', 'ua']);
    translate.setDefaultLang('ru');
    translate.use('ru');

    this.lenguages = [
      {
        title: 'ru',
        classActive: 1
      },
      {
        title: 'ua',
        classActive: 0
      }
    ]

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

  changeLang(lang: string): void {
    this.translate.use(lang);
  }

  addActive(index): void {
    const ru = 0;
    const ua = 1;
    switch (index) {
      case ru:
        this.lenguages[ru].classActive = 1;
        this.lenguages[ua].classActive = 0;
        break;
      
      case 1:
        this.lenguages[ru].classActive = 0;
        this.lenguages[ua].classActive = 1;
        break;
    }
  }

  navBarTogglerIsVisible() {
    return this.navbarToggler.nativeElement.offsetParent !== null;
  }

  collapseNav() {
    if (this.navBarTogglerIsVisible()) {
      this.navbarToggler.nativeElement.click();
    }
  }
}
