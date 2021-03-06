import { Component, OnInit } from '@angular/core';

interface imgObj {
  alt: string;
  src: string;
}

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.sass']
})

export class BannerComponent implements OnInit {

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
  		src: 'banner.round_title'
  	}

  }

  ngOnInit() {
  }

}
