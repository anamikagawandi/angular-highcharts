import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Subscription } from 'rxjs';
import { RandomNumberService } from 'src/app/services/random-number.service';
import { data } from '../../../../assets/data';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

    subscription: Subscription;
    arr_line=[];
    charts:Highcharts.Chart;
    dataArray=data;

    constructor(private pubServ : RandomNumberService)    {
     
      this.subscription=pubServ.$newNumber.subscribe(
        res=>{
            //console.log("in area"+res)
          this.charts.series[0].addPoint(res);
        }
      )
    }

   

    createChart()
    {
        this.charts= Highcharts.chart('container_area', {
            chart: {
                type: 'area'
            },
            title: {
                text: 'ZoomZone Revenue'
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                labels: {
                    
                }
            },
            yAxis: {
                title: {
                    text: 'Revenue of ZoomZone'
                },
                labels: {
                    formatter: function () {
                        return this.value / 1000 + 'k';
                    }
                }
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
                name: 'ZoomZone',
                data: this.arr_line
            }]
        });
      
    }

  ngOnInit() {

    // this.dataArray.forEach((e)=>{
    //     if(e["Company"]="Zoomzone"){
    //     this.arr_line.push(parseInt(e["Revenue"]))
    //     //console.log(this.arr)
    // }
    //   });
    for (let i = 0; i < this.dataArray.length; i++) {
        if (this.dataArray[i]["Company"] == "Zoomzone") {
          this.arr_line.push(parseInt(this.dataArray[i]["Revenue"]))
        }
      }
    //   console.log("data"+JSON.stringify(data))
    //   console.log("data array"+JSON.stringify(this.dataArray))  
      this.createChart();
    
  }
}
