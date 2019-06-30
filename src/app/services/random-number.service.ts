import { Injectable } from '@angular/core';
import { data } from '../../assets/data';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RandomNumberService {
  newNumber = new Subject();
  $newNumber = this.newNumber.asObservable();

  constructor() { }

  public getRandomInt() {

    let min=Math.min.apply(null,data.map((size) =>{
      return parseInt(size["Revenue"]);
}));
    let max=Math.max.apply(null,data.map((size) =>{
      return parseInt(size["Revenue"]);
    }));
      //console.log("service"+Math.floor(Math.random() * (max - min + 1)) + min);
      setInterval(() => {
        this.newNumber.next(Math.floor(Math.random() * (max - min + 1)) + min); 
      }, 1000);    
        
}
}
