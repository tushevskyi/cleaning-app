import { Component, OnInit } from '@angular/core';
import { SendEmailService }  from '../send-email.service'; 

@Component({
  selector: 'app-email-send',
  templateUrl: './email-send.component.html',
  styleUrls: ['./email-send.component.sass'],
  providers:  [ SendEmailService ]
})

export class EmailSendComponent implements OnInit {

  sendmail: any;
  response: any;

  constructor(private service: SendEmailService) {}

  ngOnInit() {}

  sendEmail(clientMail): any {
    this.sendmail = this.service.sendEmail(clientMail)
      .subscribe( data => { 
        this.response = data;
        console.log(this.response);
      });
  }

 
}


/*todo list
validate email on client and server
save email data
return callback with ok if maillsend
*/