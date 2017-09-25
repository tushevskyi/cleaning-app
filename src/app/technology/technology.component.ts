import { Component, OnInit } from '@angular/core';
import { HostListener }      from '@angular/core';

interface imgObj {
	alt: string;
	src: string;
}

interface technologyDescription {
  img_src: string;
  img_alt: string;
  icon_src: string
  icon_alt: string;
  description_title: string; 
  description_text: string;
}

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.sass']
})
export class TechnologyComponent implements OnInit {
  
  technologyMainLogo: imgObj;
  technologyDescription: Array<technologyDescription>;
  scroll: any;

  constructor() { 
  	this.technologyMainLogo = {
  		alt: 'vesch technology main logo',
  		src: '../assets/svg/vesch_full_white.svg'
  	}

  	this.technologyDescription = [
  		{
  			img_src: '../assets/img/technology/1.png',
  			img_alt: 'vesch technology image',
  			icon_src: '../assets/svg/1.svg',
  			icon_alt: 'vesch technology icon',
  			description_title: 'Деликатная чистка, лучшая забота о ваших вещах',
  			description_text: `​Мы используем новейшее оборудование последнего поколения 
        что позволяет нам использовать инновационные экотехнологии сухой чистки Intense 
        и аквачистки Electrolux Lagoon, главной особенностью которых является деликатный подход​
        к​ ​ тканям, ​ ​ отсутствие​ ​ усадки​, сохранение​ ​ формы​ ​ и цвета ваших вещей.`
  		},
  		{
  			img_src: '../assets/img/technology/2.png',
  			img_alt: 'vesch technology image',
  			icon_src: '../assets/svg/2.svg',
  			icon_alt: 'vesch technology icon',
  			description_title: 'Только <br> эко-безопасные технологии',
  			description_text: `Все наши средства по уходу за вещами абсолютно экологичны,  
        гипоаллергенны и безопасны для вас, ваших близких и окружающей среды​.`	
  		},
  		{
  			img_src: '../assets/img/technology/3.png',
  			img_alt: 'vesch technology image',
  			icon_src: '../assets/svg/3.svg',
  			icon_alt: 'vesch technology icon',
  			description_title: 'Доступное <br> качество',
  			description_text: `​Наилучшее качество деликатной и безопасной 
        для здоровья экочистки по цене обычной химчистки.`
  		}
  	]
  }

  ngOnInit() {
  }

  @HostListener('scroll', ['$event'])
  onScroll(event) {
    this.scroll = event.srcElement.scrollTop;
    console.log(scroll);
  }

}
