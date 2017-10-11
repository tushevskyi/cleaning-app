import { Component, OnInit }                          from '@angular/core';
import { SmsSendService }	                            from './sms-send.service';
import { FormControl, FormGroup }                     from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NgClass }                                    from '@angular/common';

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
  phoneNumberErrorStatus: boolean = false;
  emailSendResponse: boolean = false;
  inputValue: string;
  mask: any[] = ['+', '3', '8', ' ', '(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  
  smsSendedText: string;
  promo_service_title: string;
  sms_send_btn_Text: object;
  sms_send_respond_Text: object;
  send_email_propouse_Text: string;

  constructor(private service: SmsSendService) {
    this.send_email_propouse_Text = "send_email_propouse";
    this.sms_send_respond_Text = {
      first_part: "sms-send-respond.first_part",
      second_part: "sms-send-respond.second_part",
    },
    this.smsSendedText = "smsSendedText";
    this.promo_service_title = "promo_service_title";
    this.sms_send_btn_Text = {
      no_error: "sms_send_btn.btn-no-error",
      error: "sms_send_btn.btn-error" 
    },

    this.info_blocks = [
      {
        number: '1.',
        title: "sms.info_title_0",
        term: "sms.info_term_0",
      },
      {
        number: '2.',
        title: "sms.info_title_1",
        term: "sms.info_term_1",
      },
      {
        number: '3.',
        title: "sms.info_title_2",
        term: "sms.info_term_2",
      }
    ];

    this.smsSendGroup = new FormGroup({
       inputPhone: new FormControl()
    });
  }

  ngOnInit() {}

  inputFocus(): void {
    if(this.phoneNumberErrorStatus) {
      this.phoneNumberErrorStatus = false;
    }
  }

  hideElementAnimation(): void {
    if(this.smsSendResponse) {
      this.state = (this.state === 'inactive' ? 'active' : 'inactive');
      this.animationDoneResult = false;
    }
  }

  receiveEmailSendStatus($event): void {
    this.emailSendResponse = $event;
  }

  clearInputValue(): void {
    if(this.phoneNumberErrorStatus) {
      this.inputValue = '';
    }
  }
 
  onSubmit(user_phone): void {
  	this.smssend = this.service.smsSendRequest(user_phone)
  	  .subscribe( data => { 
        this.responseSmsObj = data;
        this.promoCode = data.promoCode;
        this.smsSendResponse = data.successStatus;
        this.phoneNumberErrorStatus = data.phoneNumberErrorStatus;
        this.hideElementAnimation();
        this.clearInputValue();
      }); 
  }

}