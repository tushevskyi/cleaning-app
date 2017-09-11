import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface smsObj {
	phone_number: string;
}

@Injectable()
export class SmsSendService {

  clientSms: smsObj;	

  constructor(private http: HttpClient) { }

  smsSendRequest(user_phone: string): any {
    this.clientSms = { phone_number: user_phone };
    return this.http.post('/smssend', this.clientSms);
  }

}
