import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';


@Component({
  selector: 'app-consultant-info',
  templateUrl: './consultant-info.component.html',
  styleUrls: ['./consultant-info.component.css']
})
export class ConsultantInfoComponent implements OnInit {

  consultantInfo: any = {
    firstName:  '',
    lastName: '',
    rangeDates: []
  };

  fullName: string = 'HAIKI Hanae';
  
  constructor() { }

  ngOnInit(): void {
  }


  showValues(){
    console.log(this.consultantInfo);
  };

}
