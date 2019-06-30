import { Component } from '@angular/core';
import { RandomNumberService } from './services/random-number.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chartsAssignment';

  constructor(private pubServ:RandomNumberService)
  {
    pubServ.getRandomInt();
  }
}
