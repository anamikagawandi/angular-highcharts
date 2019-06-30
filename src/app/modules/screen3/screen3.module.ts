import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Parent3Component } from './parent3/parent3.component';
import { FormGroup,FormsModule } from '@angular/forms'
import {MatFormFieldModule, MatFormFieldControl} from '@angular/material/form-field';

@NgModule({
  declarations: [Parent3Component],
  imports: [
    CommonModule,FormsModule,MatFormFieldModule
  ],
  exports : [Parent3Component]
})
export class Screen3Module { }
