import { NgbModule } 	       from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule }       from '@angular/platform-browser';
import { NgModule }            from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';


import { AppComponent }        from './app.component';
import { PriceComponent }      from './price/price.component';
import { EmailSendComponent }  from './email-send/email-send.component';
import { PriceModalComponent } from './price-modal/price-modal.component';
import { RandomNumberComponent } from './random-number/random-number.component';

@NgModule({
  declarations: [AppComponent, PriceComponent, EmailSendComponent, PriceModalComponent, RandomNumberComponent],
  imports: [BrowserModule, HttpClientModule, NgbModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
