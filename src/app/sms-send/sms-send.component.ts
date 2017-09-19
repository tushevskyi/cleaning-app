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
  successStatus: boolean = false;
  state: string = 'inactive';
  animationDoneResult: boolean = true;
  emailSendResponse: boolean = false;
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
    ];

    this.smsSendGroup = new FormGroup({
       inputPhone: new FormControl()
    });
  }

  ngOnInit() {}

  hideElementAnimation(): void {
    if (this.successStatus) {
      this.state = (this.state === 'inactive' ? 'active': 'inactive');
      setTimeout(() => {
        this.animationDoneResult = false;
        console.log('test');
      },300);
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
        this.successStatus = data.successStatus;
        console.log(this.responseSmsObj);
      });
  }

}

// todo list
// validate phone number on client and server +
// save email data 
// return callback with ok if smssend +

