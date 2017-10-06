import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  footerLegal: string;	

  constructor() { 
  	this.footerLegal = "footer.legal_text"
  }

  ngOnInit() {
  }

}
