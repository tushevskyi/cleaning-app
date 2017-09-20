import { Component, OnInit }                          from '@angular/core';
import { SmsSendService }	                            from './sms-send.service';
import { FormControl, FormGroup }                     from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-sms-send',
  templateUrl: './sms-send.component.html',
  styleUrls: ['./sms-send.component.sass'],
  providers: [ SmsSendService ],
  animations: [
    trigger('hideElement', [
      state('inactive', style({
        opacity: 1
      })),
      state('active', style({
        opacity: 0
      })),
      transition('inactive => active', animate('300ms ease-in')),
      transition('active => inactive', animate('300ms ease-in'))
    ])
  ]
})

export class SmsSendComponent implements OnInit {

  info_blocks: Array<object>;
  smsSendGroup: any;
  smssend: object;
  responseSmsObj: object;
  promoCode: number; 
  state: string = 'inactive';
  animationDoneResult: boolean = true;
  smsSendResponse: boolean;
  emailSendResponse: boolean = false;
  mask: any[] = ['+', '3', '8', ' ', '(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  callback;

  constructor(private service: SmsSendService) {
    this.info_blocks = [
      {
        number: '1.',
        title: "Получите​ <br> персональный <br>​промокод:",
        term: "Введите​ ​свой​ ​номер​ <br>телефона​ ​и​ ​email​ <br>​в форме​ ​ниже."
      },
      {
        number: '2.',
        title: "Проверьте​ <br> ​свои ​SMS <br>​или​ почту:",
        term: "Промокод​ ​уже​ ​там.​ ​<br>Сохраните​ ​его​ ​до момента​ ​использования!"
      },
      {
        number: '3.',
        title: "Сообщите​ <br> ​код <br>​администратору:",
        term: "В любом​ ​приемном пункте <br>сети экочисток​ ​Vesch​ ​с​ ​1 по 31 ноября​ 2017​ ​года."
      }
    ];

    this.smsSendGroup = new FormGroup({
       inputPhone: new FormControl()
    });
  }

  ngOnInit() {}

  hideElementAnimation() {
    if(this.smsSendResponse) {
      this.state = (this.state === 'inactive' ? 'active' : 'inactive');
      this.animationDoneResult = false;
    }
  }

  receiveEmailSendStatus($event) {
    this.emailSendResponse = $event;
  }
 
  onSubmit(user_phone): void {
  	this.smssend = this.service.smsSendRequest(user_phone)
  	  .subscribe( data => { 
        this.responseSmsObj = data;
        this.promoCode = data.promoCode;
        this.smsSendResponse = data.successStatus;
        console.log(this.responseSmsObj);
        this.hideElementAnimation();
      }); 
  }

}

// todo list
// validate phone number on client and server +
// save email data 
// return callback with ok if smssend +

