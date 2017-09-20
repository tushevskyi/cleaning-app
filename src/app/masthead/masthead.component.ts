import { Component, OnInit } from '@angular/core';

interface imgObj {
  alt: string;
  src: string;
}

@Component({
  selector: 'app-masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.sass']
})
export class MastheadComponent implements OnInit {

  flagSvg: imgObj;
  waveSvg: imgObj;
  mainLogoWhite: imgObj;
  roundTitle: imgObj;


  constructor() { 
  	this.flagSvg = {
  		alt: 'vesch flag',
  		src: '../assets/svg/vesch_flag_small.svg'
  	};
  	this.waveSvg = {
  		alt: 'vesch small wave',
  		src: '../assets/svg/vesch_wave.svg'
  	};
  	this.mainLogoWhite = {
  		alt: 'vesch main logo white',
  		src: '../assets/svg/vesch_white.svg'
  	};
  	this.roundTitle = {
  		alt: 'vesch round title',
  		src: '../assets/svg/round_title.svg'	
  	}

  }

  ngOnInit() {
  }

}
