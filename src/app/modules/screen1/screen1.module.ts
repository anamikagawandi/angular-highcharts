import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieComponent } from './pie/pie.component';
import { BarComponent } from './bar/bar.component';
import { DonutComponent } from './donut/donut.component';
import { ColumnComponent } from './column/column.component';
import { Parent1Component } from './parent1/parent1.component';
import { MatSelectModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PieComponent, BarComponent, DonutComponent, ColumnComponent, Parent1Component],
  imports: [
    CommonModule,MatSelectModule,FormsModule
  ],
  exports:[PieComponent, BarComponent, DonutComponent, ColumnComponent, Parent1Component]
})
export class Screen1Module { }
