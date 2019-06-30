import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ MatSelectModule,MatInputModule, MatFormFieldModule } from '@angular/material'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatSelectModule,MatInputModule,MatFormFieldModule
  ],
  exports:[MatSelectModule,MatInputModule,MatFormFieldModule]
})
export class MaterialModule { }
