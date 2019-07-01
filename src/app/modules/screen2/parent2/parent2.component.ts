import { Component, OnInit } from '@angular/core';
import { RandomNumberService } from 'src/app/services/random-number.service';
import {data} from '../../../../assets/data'

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements OnInit {

  constructor(private pubServ:RandomNumberService) { 
    console.log(data);
  }

  ngOnInit() {
   // this.pubServ.getRandomInt();
  }

}
