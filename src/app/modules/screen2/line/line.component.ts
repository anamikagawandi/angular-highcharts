import { Component, OnInit, OnChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import { data } from 'src/assets/data';
import { RandomNumberService } from 'src/app/services/random-number.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {

  arr_line=[];
  charts:Highcharts.Chart;

  subscription: Subscription;

  constructor(private pubServ : RandomNumberService)
  {
    this.subscription=pubServ.$newNumber.subscribe(
      res=>{
        this.charts.series[0].addPoint(res);
      }
    )
  }

  addPoint()
  {
   // this.pubServ.getRandomInt();
  }

  createChart()
  {
    this.charts=Highcharts.chart('container_line', {

      title: {
          text: 'Revenue of ZoomZone'
      },  
      yAxis: {
          title: {
              text: 'Number of Employees'
          }
      },
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
      },
  
      plotOptions: {
          series: {
              label: {
                  connectorAllowed: false
              },
              pointStart: 2010
          }
      },
  
      series: [{
          type:undefined,
          name: "Zoomzone",
          data: this.arr_line//[43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
      }],
  
      responsive: {
          rules: [{
              condition: {
                  maxWidth: 500
              },
              chartOptions: {
                  legend: {
                      layout: 'horizontal',
                      align: 'center',
                      verticalAlign: 'bottom'
                  }
              }
          }]
      }
  
  });
  }

  ngOnInit() {

   // this.pubServ.getRandomInt();
    
    data.forEach((e)=>{
      if(e["Company"]="Zoomzone"){
      this.arr_line.push(parseInt(e["Revenue"]))
      //console.log(this.arr)
      }
    });
    this.createChart();
   
  } 

}
