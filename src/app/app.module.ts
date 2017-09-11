import { NgbModule } 	       from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule }       from '@angular/platform-browser';
import { NgModule }            from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import {FormsModule}           from '@angular/forms';


import { AppComponent }          from './app.component';
import { PriceComponent }        from './price/price.component';
import { EmailSendComponent }    from './email-send/email-send.component';
import { PriceModalComponent }   from './price-modal/price-modal.component';
import { HeaderComponent }       from './header/header.component';
import { SmsSendComponent }      from './sms-send/sms-send.component';

@NgModule({
  declarations: [AppComponent, PriceComponent, EmailSendComponent, PriceModalComponent, HeaderComponent, SmsSendComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, NgbModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
