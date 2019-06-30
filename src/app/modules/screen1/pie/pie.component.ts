import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Chart } from 'angular-highcharts';
import { Subscription } from 'rxjs';
import { FilterService } from '../../../services/filter.service';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {


  subscription: Subscription;
  data1 = [];
  charts: Highcharts.Chart;
  constructor(private pubServ: FilterService) {
    this.data1=[];
   
    this.subscription = this.pubServ.$initialData.subscribe(
      res => {
      //  console.log("This is dd subscription" + JSON.stringify(res));
      this.data1=[];
        res["charts"].forEach((e) => {
          this.data1.push(e);
        })



        this.createChart();
      }
    )


  }


  createChart() {
    // Build the chart
    Highcharts.chart('container_pie', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Revenue of Companies'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',

            connectorColor: 'silver'
          }
        }
      },
      series: [{
        type: undefined,
        data: this.data1
      }]
    });

  }

  ngOnInit() {

  }

}
