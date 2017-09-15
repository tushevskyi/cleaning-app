import { Component, OnInit, Input } from '@angular/core';
import { EmailSendService }  from './email-send.service'; 

@Component({
  selector: 'app-email-send',
  templateUrl: './email-send.component.html',
  styleUrls: ['./email-send.component.sass'],
  providers:  [ EmailSendService ]
})

export class EmailSendComponent implements OnInit {

  emailsend: any;
  response: object;


  constructor(private service: EmailSendService) {}

  @Input() promoCode: number;
  

  ngOnInit() {}

  emailSend(clientMail): any {
    this.emailsend = this.service.emailSendRequest(clientMail, this.promoCode)
      .subscribe( data => { 
        this.response = data;
        console.log(this.response);
      });
  }

 
}


/*todo list
validate email on client and server
save email data
return callback with ok if maillsend +
*/