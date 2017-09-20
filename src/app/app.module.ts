import { NgbModule } 	           from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule }           from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } 		       from '@angular/core';
import { HttpClientModule }        from '@angular/common/http';
import { FormsModule } 		       from '@angular/forms';
import { ReactiveFormsModule }     from '@angular/forms';
import { TextMaskModule } 	   	   from 'angular2-text-mask';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } 		   from '@agm/core';


import { AppComponent }            from './app.component';
import { PriceComponent }          from './price/price.component';
import { EmailSendComponent }      from './email-send/email-send.component';
import { PriceModalComponent }     from './price-modal/price-modal.component';
import { MastheadComponent }       from './masthead/masthead.component';
import { SmsSendComponent }        from './sms-send/sms-send.component';
import { HeroFormComponent }       from './hero-form/hero-form.component';
import { TechnologyComponent } 	   from './technology/technology.component';
import { MapComponent } 		   from './map/map.component';

@NgModule({
  declarations: [AppComponent, PriceComponent, EmailSendComponent, 
  				 PriceModalComponent, MastheadComponent, SmsSendComponent, 
  				 HeroFormComponent, TechnologyComponent, MapComponent],
  imports: [BrowserModule, HttpClientModule, NgbModule.forRoot(), TextMaskModule, 
  		    FormsModule, ReactiveFormsModule, BrowserAnimationsModule,
  		    AgmCoreModule.forRoot({
      			apiKey: 'AIzaSyAeOqfRLAWnO6DteamFe899g6O6_XjanKY'
    		})],
  providers: [],
  schemas:  [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
