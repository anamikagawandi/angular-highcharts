import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineComponent } from './line/line.component';
import { AreaComponent } from './area/area.component';
import { Parent2Component } from './parent2/parent2.component';

@NgModule({
  declarations: [LineComponent, AreaComponent, Parent2Component],
  imports: [
    CommonModule
  ],
  exports:[LineComponent, AreaComponent, Parent2Component]
})
export class Screen2Module { }
