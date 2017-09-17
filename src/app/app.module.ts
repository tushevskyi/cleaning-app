import { NgbModule } 	       from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule }       from '@angular/platform-browser';
import { NgModule } 		   from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } 		   from '@angular/forms';
import { TextMaskModule } 	   from 'angular2-text-mask';


import { AppComponent }        from './app.component';
import { PriceComponent }      from './price/price.component';
import { EmailSendComponent }  from './email-send/email-send.component';
import { PriceModalComponent } from './price-modal/price-modal.component';
import { HeaderComponent }     from './header/header.component';
import { SmsSendComponent }    from './sms-send/sms-send.component';
import { HeroFormComponent } from './hero-form/hero-form.component';

@NgModule({
  declarations: [AppComponent, PriceComponent, EmailSendComponent, PriceModalComponent, HeaderComponent, SmsSendComponent, HeroFormComponent],
  imports: [BrowserModule, HttpClientModule, NgbModule.forRoot(), TextMaskModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
