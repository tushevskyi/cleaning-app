import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.sass']
})
export class MastheadComponent implements OnInit {

  flagImg: object;

  constructor() { 
  	this.flagImg = {
  		alt: 'vesch flag',
  		src: '../assets/svg/vesch_flag_small.svg'
  	}
  }

  ngOnInit() {
  }

}
