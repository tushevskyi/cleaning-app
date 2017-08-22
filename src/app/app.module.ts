import { NgbModule } 	       from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule }       from '@angular/platform-browser';
import { NgModule }            from '@angular/core';
import { HttpModule }          from '@angular/http';


import { AppComponent }        from './app.component';
import { PriceComponent }      from './price/price.component';
import { EmailSmsComponent }   from './email-sms/email-sms.component';
import { PriceModalComponent } from './price-modal/price-modal.component';

@NgModule({
  declarations: [AppComponent, PriceComponent, EmailSmsComponent, PriceModalComponent],
  imports: [BrowserModule, NgbModule.forRoot(), HttpModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
