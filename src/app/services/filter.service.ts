import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { data } from '../../assets/data';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  detectChange = new Subject();
  $detectChange = this.detectChange.asObservable();

  getFilter = new Subject();
  $getFilter = this.getFilter.asObservable();

  initialData = new Subject();
  $initialData = this.initialData.asObservable();


  arrCompanies = [];
  arr = [];
  dataArray=data;

  constructor() { }

  public updateChart(filter) {


    this.arrCompanies = [];
    this.arr = [];
    let newData = this.dataArray;
    // console.log("data" + JSON.stringify(this.dataArray));
    // console.log("filter " + JSON.stringify(filter))
    if (filter) {
      newData = this.dataArray.filter((e) => {
        // console.log("category" + e[filter["category"]])
        // console.log("filterParamenter" + JSON.stringify(filter))
        // console.log("option" + filter["option"])
        return e[filter["category"]] == filter["option"]
      });
    }



    // console.log("after filter" + JSON.stringify(newData))
    this.arrCompanies = newData.reduce(function (a, d) {
      if (a.indexOf(d["Company"]) === -1 && d["Company"]) {
        a.push(d["Company"]);
      }
      return a;
    }, []);

    // console.log("companies" + JSON.stringify(this.arrCompanies))

    this.arrCompanies.forEach((e) => {
      let temp = 0;
      newData.forEach((i) => {
        //  console.log("Obj comapny"+e+" array company "+i.Company)

        if (i.Company === e) {

          temp += parseInt(i["Revenue"]);
        }
      });
      this.arr.push(temp);
    });

    //console.log(JSON.stringify(data))
    //console.log(JSON.stringify(newData));
    console.log("revenue" + JSON.stringify(this.arr))

    let v = {
      "companies": [],
      "revenue": [],
      "charts": []
    }

    for (let i = 0; i < this.arrCompanies.length; i++) {
      let c = {
        "name": null,
        "y": null
      }
      v.companies.push(this.arrCompanies[i]);
      v.revenue.push(this.arr[i]);
      c.name = this.arrCompanies[i];
      c.y = this.arr[i];
      v.charts.push(c)
      // console.log("service v:" + JSON.stringify(v))
    }

    // console.log("filter data " + JSON.stringify(v))
    this.initialData.next(v);
  }


  public getFilterData(filter) {
    let filtered_data = this.dataArray.reduce(function (a, d) {
      if (a.indexOf(d[filter]) === -1 && d[filter]) {
        a.push(d[filter]);
      }
      return a;
    }, []);
    //console.log("Filtered data"+JSON.stringify(filtered_data));
    this.getFilter.next(filtered_data)
  }



  // public getDataForScreen1() {
  //   this.arrCompanies = data.reduce(function (a, d) {
  //     if (a.indexOf(d["Company"]) === -1 && d["Company"]) {
  //       a.push(d["Company"]);
  //     }
  //     return a;
  //   }, []);


  //   this.arrCompanies.forEach((e) => {
  //     let temp = 0;
  //     data.forEach((i) => {
  //       //  console.log("Obj comapny"+e+" array company "+i.Company)

  //       if (i.Company === e) {

  //         temp += parseInt(i["Revenue"]);
  //       }
  //     });
  //     this.arr.push(temp);
  //   });


  //   let v = {
  //     "companies": [],
  //     "revenue": [],
  //     "charts": []
  //   }

  //   for (let i = 0; i < this.arrCompanies.length; i++) {
  //     let c = {
  //       "name": null,
  //       "y": null
  //     }
  //     v.companies.push(this.arrCompanies[i]);
  //     v.revenue.push(this.arr[i]);
  //     c.name = this.arrCompanies[i];
  //     c.y = this.arr[i];
  //     v.charts.push(c)
  //     //   console.log("service v:"+JSON.stringify(v))
  //   }

  //   // this.arrCompanies.forEach((e)=>
  //   // {
  //   //   v.companies.push(e);
  //   // })

  //   // this.arr.forEach((e)=>
  //   // {
  //   //   v.revenue.push(e);
  //   // })

  //   // // v.companies=this.arrCompanies;
  //   // // v.revenue=this.arr
  //   console.log("non filter data " + JSON.stringify(v))

  //   this.initialData.next(v)


  //   // console.log("service"+JSON.stringify(v));



  // }
}
