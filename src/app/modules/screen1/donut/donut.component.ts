import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Chart } from 'angular-highcharts';
import { data } from '../../../../assets/data';
import { Subscription } from 'rxjs';
import { FilterService } from '../../../services/filter.service';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent implements OnInit {

  subscription: Subscription;
  data1 = [];
  charts: Highcharts.Chart;

  constructor(private pubServ: FilterService) {
    
    this.subscription = this.pubServ.$initialData.subscribe(
      res => {
       // console.log("This is dd subscription" + JSON.stringify(res));
       this.data1=[];
        res["charts"].forEach((e) => {
          this.data1.push(e);
        })
        this.createChart();
      }
    )


  }

  createChart() {
    Highcharts.chart('container_donut', {
      chart: {
        type: 'pie',
        options3d: {
          enabled: true,
          alpha: 45
        }
      },
      title: {
        text: 'Revenue of Companies'
      },
      plotOptions: {
        pie: {
          innerSize: 100,
          depth: 45
        }
      },
      series: [{
        type: undefined,
        data: this.data1
      }]
    });
  }





  ngOnInit() {
    //this.pubServ.getDataForScreen1();
   // console.log("Init")

  }
}
