import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Parent1Component } from './modules/screen1/parent1/parent1.component';
import { Parent2Component } from './modules/screen2/parent2/parent2.component';
import { Parent3Component } from './modules/screen3/parent3/parent3.component';

const routes: Routes = [
  {
    path : 'screen1' ,component : Parent1Component
  },
  {
    path : 'screen2' , component : Parent2Component
  },
  {
    path : 'screen3' , component : Parent3Component
  },
  {
    path : '**' , redirectTo  : 'root'
  } 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
