import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  footerLegal: string;	
  icons: Array<object>;

  constructor() {
  	this.footerLegal = "footer.legal_text";
  	this.icons = [
  		{
  			class: 'icon_fb',
  			href: 'https://www.facebook.com/vesch.ua/',
  			src: '../assets/svg/fb.svg',
  			alt: 'facebook icon'
  		},
  		{
  			class: 'icon_inst',
  			href: 'https://www.instagram.com/vesch.ua/',
  			src: '../assets/svg/inst.svg',
  			alt: 'instagram icon'
  		},
  		{
  			class: 'icon_tm',
  			href: 'https://t.me/Vesch_bot',
  			src: '../assets/svg/tm.svg',
  			alt: 'telegram icon'
  		}
  	]
  }

  ngOnInit() {
  }

}
