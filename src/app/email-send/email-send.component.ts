import { Component, OnInit }     from '@angular/core';
import { HttpClient }            from '@angular/common/http';

interface mailObj {
  mail: string;
}

@Component({
  selector: 'app-email-send',
  templateUrl: './email-send.component.html',
  styleUrls: ['./email-send.component.css']
})

export class EmailSendComponent implements OnInit {

  clientMail: mailObj;
  serverResponse: object = { response: ''};

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  sendEmail(userMail: string) {
  	this.clientMail = { mail: userMail };
  	this.http.post('/api',  this.clientMail).subscribe( data => {
      this.serverResponse = data;
    });
  }

}


/*todo list
validate email on client and server
save email data
return callback with ok if maillsend
*/