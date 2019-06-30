import { Component, OnInit, OnChanges } from '@angular/core';

import { Subscription } from 'rxjs';
import { FilterService } from '../../../services/filter.service';



export interface Filter {
  value: string;
  viewValue: string;
}

export interface FilterValues {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {

  flag = true;
  subscription: Subscription;
  selectedOption: string;
  selectedValue:string;

  filters: Filter[] = [
    { value: 'Country', viewValue: 'Country' },
    { value: 'Year', viewValue: 'Year' },
    { value: 'All', viewValue: 'All' }
  ];

  filtersValues: FilterValues[] = [];


  constructor(private pubServ: FilterService) {
    this.subscription = this.pubServ.$getFilter.subscribe(
      res => {
        // console.log("res"+JSON.stringify(res))
        //console.log(res)
        //res = JSON.parse(JSON.stringify(res))
        let response=[]
        this.filtersValues = [];

        // for(let i=0;i<res.length;i++)ng serve
        // {

        // }
        res.forEach(element => {
        let filterObj = { value: null, viewValue: null }
        console.log(typeof element)
        filterObj['value'] = element;
        filterObj['viewValue'] = element
        this.filtersValues.push(filterObj);
        });
      })
  }


  enableFilter() {
    if(!(this.selectedOption=="All"))
    {
      this.flag = false;
    //console.log(this.flag);
    this.pubServ.getFilterData(this.selectedOption);
    //this.pubServ.updateChart(this.selectedOption);
    }
    else
    {
      this.flag=true;
      this.pubServ.updateChart(null);
    }
    
  }



  submit()
  {
    let filterObj={"category":null,
      "option":null
    }
    filterObj.category=this.selectedOption;
    filterObj.option=this.selectedValue
    console.log(JSON.stringify(filterObj))
    this.pubServ.updateChart(filterObj);
  }


  ngOnInit() {

  }

}
