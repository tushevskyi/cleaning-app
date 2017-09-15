import { Component, OnInit } from '@angular/core';
import { SmsSendService }	          from './sms-send.service';

@Component({
  selector: 'app-sms-send',
  templateUrl: './sms-send.component.html',
  styleUrls: ['./sms-send.component.sass'],
  providers: [ SmsSendService ]
})

export class SmsSendComponent implements OnInit {

  info_blocks: Array<object>;
  smssend: object;
  response: object;
  promoCode: number; 
  successStatus: boolean;
  mask: any[] = ['+', '3', '8', ' ', '(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  constructor(private service: SmsSendService) {
    this.info_blocks = [
      {
        number: '1.',
        title: `Получите <br> промокод на <br> сайте`,
        term: "Введите телефон и <br> Email, чтобы мы <br> прислали Вам код"
      },
      {
        number: '2.',
        title: "Сохраните SMS <br> или Email с <br> кодом",
        term: "Не удаляйте код до его <br> использования"
      },
      {
        number: '3.',
        title: "Придите и <br> получите чистку <br> бесплатно",
        term: "В любом из отделений <br> Vesch с 16 октября по <br> 30 ноября"
      }
    ]
  }

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

// todo list
// validate phone number on client and server +
// save email data 
// return callback with ok if smssend +

