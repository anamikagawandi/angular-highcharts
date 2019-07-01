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

  arr_line = [];
  charts: Highcharts.Chart;
  dataArray = data;

  subscription: Subscription;

  constructor(private pubServ: RandomNumberService) {
    console.log("Constructor")
    this.subscription = pubServ.$newNumber.subscribe(
      res => {
        this.charts.series[0].addPoint(res);
      }
    )
  }


  createChart() {
    console.log("Create chart")
    this.charts = Highcharts.chart('container_line', {

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
        type: undefined,
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
    //  console.log("before data"+JSON.stringify(data))
    console.log(this.dataArray)
    console.log(data)

    // this.dataArray.forEach((e) => {
       console.log(this.dataArray[3]["Company"])
    //   if (e["Company"] == "Zoomzone") {
    //     this.arr_line.push(parseInt(e["Revenue"]))

    //   }
    // });

    for (let i = 0; i < this.dataArray.length; i++) {
      if (this.dataArray[i]["Company"] == "Zoomzone") {
        this.arr_line.push(parseInt(this.dataArray[i]["Revenue"]))
      }
    }
    console.log(JSON.stringify(this.arr_line))
    // console.log("data"+JSON.stringify(data))
    // console.log("data array"+JSON.stringify(this.dataArray))

    this.createChart();

  }

}
