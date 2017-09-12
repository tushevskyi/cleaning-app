import { Component, OnInit, Input } from '@angular/core';
import { SmsSendService }	   from './sms-send.service';

@Component({
  selector: 'app-sms-send',
  templateUrl: './sms-send.component.html',
  styleUrls: ['./sms-send.component.sass'],
  providers: [ SmsSendService ]
})

export class SmsSendComponent implements OnInit {

  smssend: object;
  response: object;
  promoCode: number; 
  successStatus: boolean;
  mask: any[] = ['+', '3', '8', ' ', '(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  

  constructor(private service: SmsSendService) {}

  ngOnInit() {}
 
  smsSend(user_phone): void {
  	this.smssend = this.service.smsSendRequest(user_phone)
  	  .subscribe( data => { 
        this.response = data;
        this.promoCode = data.promoCode;
        this.successStatus = data.successStatus;
        console.log(this.response);
      });
  }

}

/*todo list
validate phone number on client and server
save email data
return callback with ok if smssend
*/
