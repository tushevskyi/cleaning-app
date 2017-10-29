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

  technology_title_Text: string;
  technology_subtile_Text: string;

  constructor() { 

    this.technology_title_Text = "technology_title_Text";
    this.technology_subtile_Text = "technology_subtile_Text";

  	this.technologyMainLogo = {
  		alt: 'vesch technology main logo',
  		src: '../assets/svg/vesch_full_white.svg'
  	}

  	this.technologyDescription = [
  		{
  			img_src: '../assets/img/technology/1.jpg',
  			img_alt: 'vesch technology image',
  			icon_src: '../assets/svg/1.svg',
  			icon_alt: 'vesch technology icon',
  			description_title: 'technologyDescription.description_title_0',
  			description_text: 'technologyDescription.description_text_0'
  		},
  		{
  			img_src: '../assets/img/technology/2.jpg',
  			img_alt: 'vesch technology image',
  			icon_src: '../assets/svg/2.svg',
  			icon_alt: 'vesch technology icon',
  			description_title: 'technologyDescription.description_title_1',
  			description_text: 'technologyDescription.description_text_1'
  		},
  		{
  			img_src: '../assets/img/technology/3.jpg',
  			img_alt: 'vesch technology image',
  			icon_src: '../assets/svg/3.svg',
  			icon_alt: 'vesch technology icon',
  			description_title: 'technologyDescription.description_title_2',
  			description_text: 'technologyDescription.description_text_2'
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
