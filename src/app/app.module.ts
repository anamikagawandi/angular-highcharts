import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Screen2Module } from './modules/screen2/screen2.module';
import { Screen1Module } from './modules/screen1/screen1.module';
import { Screen3Module } from './modules/screen3/screen3.module';
import { ChartModule } from 'angular-highcharts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Screen2Module,
    Screen1Module,
    Screen3Module,
    BrowserAnimationsModule,
    ChartModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
