import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Chart } from 'angular-highcharts';
import { FilterService } from '../../../services/filter.service';
import { Subscription } from 'rxjs';
import { data } from '../../../../assets/data';

@Component({
    selector: 'app-column',
    templateUrl: './column.component.html',
    styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

    subscription: Subscription;
    arr = [];
    arrCompanies = [];
    charts: Highcharts.Chart;

    constructor(private pubServ: FilterService) {

        
        this.subscription = this.pubServ.$initialData.subscribe(
            res => {
             //   console.log("This is dd subscription" + JSON.stringify(res));

             this.arr=[];
             this.arrCompanies=[];
                res["revenue"].forEach((e)=>{
                    this.arr.push(e);
                })

                res["companies"].forEach((e)=>{
                    this.arrCompanies.push(e);
                })

            
                
                // console.log("Revenue"+ JSON.stringify(this.arr));
                
                // console.log("Companies"+JSON.stringify(this.arrCompanies));
                this.createChart();
            }
        )
        
    }

    //   this.subscription=pubServ.$initialData.subscribe(
    //     res=>{
    //       console.log("This is child2 subscription"+JSON.stringify(res));
    //       this.arr=res["revenue"];
    //       console.log("Revenue"+ typeof res["revenue"]);
    //       this.arrCompanies=res["companies"];
    //       console.log("Companies"+typeof res["companies"]+ typeof this.arrCompanies);
    //     }
    //   )
    // }


    createChart() {
        Highcharts.chart('container_column', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Revenue of Companies'
            },
            xAxis: {
                categories: this.arrCompanies,
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Population (millions)',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                valueSuffix: ' millions'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            //   legend: {
            //       layout: 'horizontal',
            //       align: 'right',
            //       verticalAlign: 'top',
            //       x: -40,
            //       y: 80,
            //       floating: true,
            //       borderWidth: 1,
            //     //  backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            //       shadow: true
            //   },
            credits: {
                enabled: false
            },
            series: [{
                type: undefined,
                data: this.arr
            }]
        });

    }

    // async populateData() {

    //     this.arrCompanies = await data.reduce(function (a, d) {
    //         if (a.indexOf(d["Company"]) === -1 && d["Company"]) {
    //             a.push(d["Company"]);
    //         }
    //         return a;
    //     }, []);


    //     await this.arrCompanies.forEach((e) => {
    //         let temp = 0;
    //         data.forEach((i) => {
    //             //  console.log("Obj comapny"+e+" array company "+i.Company)

    //             if (i.Company === e) {

    //                 temp += parseInt(i["Revenue"]);
    //             }
    //         });
    //         this.arr.push(temp);
    //     });


    //     console.log(this.arr);
    //     console.log(this.arrCompanies);
    //     this.createChart()
    // }


    ngOnInit() {
        //this.pubServ.getDataForScreen1();
        console.log("Init")
       // this.populateData();

    }

}
