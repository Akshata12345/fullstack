
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { EmpApiService } from 'src/app/service/emp-api.service';
import { Employee } from 'src/app/model/employee';



@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  EmployeeData: Employee[];

  constructor(
    public fb: FormBuilder,
    public actRoute: ActivatedRoute,
    public apiService: EmpApiService,
    public router: Router
  ) { }

  ngOnInit() {
    this.updateEmployee();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getEmployee(id);
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      company: ['', [Validators.required]],
      department: ['', [Validators.required]],
      role: ['', [Validators.required]]
    })
  }
  get myForm(){
    return this.editForm.controls;
  }
  getEmployee(id:any) {
    this.apiService.getEmployee(id).subscribe(data => {
      this.editForm.setValue({
        name: data['name'],
        company: data['company'],
        department: data['department'],
        role: data['role'],
      });
    });
  }

  updateEmployee() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      company: ['', [Validators.required]],
      deparment: ['', [Validators.required]],
      role: ['', [Validators.required]]
     
    })
  }
  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateEmployee(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/employee-list');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
      return true;
    }
  }

  
}