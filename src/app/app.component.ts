import { Component } 		 from '@angular/core';
import { TranslateService }  from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
	
	constructor(private translate: TranslateService) {
		translate.addLangs(['rus', 'ua']);
		translate.setDefaultLang('rus');
  		translate.use('rus');
	}

	changeLang(lang: string) {
    	this.translate.use(lang);
  	}
}
