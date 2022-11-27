import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule,FormArray, Validators} from '@angular/forms';
import { ConsultantInfo } from './consultant-info';
import { PROFILES } from './consultant-info.contants';

@Component({
  selector: 'app-consultant-info',
  templateUrl: './consultant-info.component.html',
  styleUrls: ['./consultant-info.component.css']
})
export class ConsultantInfoComponent implements OnInit {

  fullName: string = 'GestionPV';
  pvForm!:FormGroup;

  consultantInfo: ConsultantInfo = new ConsultantInfo();

  profiles = PROFILES;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
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
