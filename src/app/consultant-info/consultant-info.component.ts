import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilder, FormGroup, FormsModule,FormArray} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';


@Component({
  selector: 'app-consultant-info',
  templateUrl: './consultant-info.component.html',
  styleUrls: ['./consultant-info.component.css']
})
export class ConsultantInfoComponent implements OnInit {

 
  fullName: string = 'GestionPV';
  pvForm!:FormGroup;
  
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.pvForm= this.formBuilder.group({
      firstName:  [''],
      lastName: [''],
      rangeDates: [''],
      adressemail:['']


    }) 
    projets: this.formBuilder.array([
      this.formBuilder.control('')
    ])
    
   }
   get projets() {
    return this.initForm.get('projets') as
     FormArray;
  }
  addProjet() {
    this.projets.push(this.formBuilder.control(''));
  }
  showValues(){
    console.log(this.pvForm.value)
  };

}
