import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-number',
  templateUrl: './random-number.component.html',
  styleUrls: ['./random-number.component.css']
})
export class RandomNumberComponent implements OnInit {

  public randomNumber: number;

  constructor() { }

  ngOnInit() {
    
  }

  createRandom() {
    return this.randomNumber = Math.random() * 10000;
  } 

}
