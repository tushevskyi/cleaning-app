import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface mailObj {
  mail: string;
}

@Injectable()
export class SendEmailService {

  clientMail: mailObj;

  constructor(private http: HttpClient) { }

  sendEmail(userMail: string): any {
  	this.clientMail = { mail: userMail };
  	return this.http.post('/emailsend', this.clientMail);
  }

}
