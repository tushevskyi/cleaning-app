import { NgbModule } 	           from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule }           from '@angular/platform-browser';
import { NgModule } 		       from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA }  from '@angular/core';
import { HttpClientModule }        from '@angular/common/http';
import { FormsModule } 		       from '@angular/forms';
import { ReactiveFormsModule }     from '@angular/forms';
import { TextMaskModule } 	   	   from 'angular2-text-mask';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } 		   from '@agm/core';
import { TranslateModule }         from '@ngx-translate/core';
import { Ng2PageScrollModule }     from 'ng2-page-scroll';

import { AppComponent }            from './app.component';
import { PriceComponent }          from './price/price.component';
import { EmailSendComponent }      from './email-send/email-send.component';
import { PriceModalComponent }     from './price-modal/price-modal.component';
import { BannerComponent }         from './banner/banner.component';
import { SmsSendComponent }        from './sms-send/sms-send.component';
import { HeroFormComponent }       from './hero-form/hero-form.component';
import { TechnologyComponent } 	   from './technology/technology.component';
import { MapComponent } 		   from './map/map.component';
import { HeaderComponent } 		   from './header/header.component';

@NgModule({
  declarations: [AppComponent, PriceComponent, EmailSendComponent, PriceModalComponent, BannerComponent, SmsSendComponent, 
  				HeroFormComponent, TechnologyComponent, MapComponent, HeaderComponent],
  imports:      [BrowserModule, HttpClientModule, NgbModule.forRoot(), TextMaskModule, FormsModule, ReactiveFormsModule,
                BrowserAnimationsModule, AgmCoreModule.forRoot({ apiKey: 'AIzaSyAeOqfRLAWnO6DteamFe899g6O6_XjanKY' }),
                TranslateModule.forRoot(), Ng2PageScrollModule],
  providers:    [],
  schemas:      [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap:    [AppComponent]
})

export class AppModule { }
