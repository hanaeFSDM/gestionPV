import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule,FormArray, Validators} from '@angular/forms';
import { ConsultantInfo } from './consultant-info';
import { PROFILES } from './consultant-info.contants';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-consultant-info',
  templateUrl: './consultant-info.component.html',
  styleUrls: ['./consultant-info.component.css']
})
export class ConsultantInfoComponent implements OnInit {
  items!: MenuItem[];

  scrollableItems!: MenuItem[];

  activeItem!: MenuItem;

  activeItem2!: MenuItem;

  fullName: string = 'GestionPV';
  pvForm!:FormGroup;

  consultantInfo: ConsultantInfo = new ConsultantInfo();

  profiles = PROFILES;
  

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.items = [
      {label: 'Consultant', icon: 'pi pi-fw pi-home'},
      {label: 'Calendar', icon: 'pi pi-fw pi-calendar'}
  ];
  
  this.scrollableItems = Array.from({ length: 2 });

  this.activeItem = this.items[0];

  this.activeItem2 = this.scrollableItems[0];
    this.initForm();
    this.addNewProject();


  }
  
  initForm(){
    this.pvForm= this.formBuilder.group({
      firstName:  ['', Validators.required],
      lastName: ['', Validators.required],
      rangeDates: ['', Validators.required],
      adressemail:['', [Validators.required,Validators.email]],
      projects: this.formBuilder.array([]),
      phoneNumber:[''],
      profile: ['', Validators.required]

    })    
  }

   get projects() {
    return this.pvForm.controls['projects'] as FormArray;
  }

  addNewProject() {
    this.projects.push(this.formBuilder.group({
      customerName: ['', Validators.required],
      projectName: ['', Validators.required]
    }));
  }

  removeProject(index: number) {
    this.projects.removeAt(index);
  }
  
  myFormArray() {
    return this.pvForm.controls['projectList'].get('projects') as FormArray;
  }
  
  save(){
    this.consultantInfo = {...this.pvForm.value};
    console.log(this.consultantInfo);
  };

}
