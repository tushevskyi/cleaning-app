import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface mailObj {
  mail: string;
  promoCode: number;
}

@Injectable()
export class EmailSendService {

  clientMail: mailObj;

  constructor(private http: HttpClient) { }

  emailSendRequest(userMail: string, promoCode: number): any {
  	this.clientMail = { mail: userMail, promoCode: promoCode};
  	return this.http.post('/emailsend', this.clientMail);
  }

}
