import { Component, OnInit } from '@angular/core';
import { Injectable }        from '@angular/core';
import { Http, Headers }     from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/operator/mergeMap';


@Component({
  selector: 'app-email-sms',
  templateUrl: './email-sms.component.html',
  styleUrls: ['./email-sms.component.css']
})

@Injectable()
export class EmailSmsComponent implements OnInit {

  constructor(private http: Http ) { }

  ngOnInit() {
  }

}
