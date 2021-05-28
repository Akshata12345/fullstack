import { Router } from '@angular/router';
import { Component, OnInit,NgZone } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { EmpApiService } from 'src/app/service/emp-api.service';



@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  
  submitted = false;
  employeeForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public router: Router,
    public ngZone: NgZone,
    public apiService: EmpApiService 
  ) { this.myForm(); }

  ngOnInit() {
  }
  myForm() {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required]],
      company: ['', [Validators.required]],
      department: ['', [Validators.required]],
      role: ['', [Validators.required]]
    })
  }
   
 
  onSubmit() {
    debugger
    this.submitted = true;
    if (!this.employeeForm.valid) {
      return false;
    } else {
      this.apiService.createEmployee(this.employeeForm.value).subscribe(
        (res) => {
          console.log('company is successfully created!');
          
          this.ngZone.run(() => this.router.navigateByUrl('/employee-list'))
        }, (error:any) => {
          console.log(error);
        });
        return true;
    }
  }

}