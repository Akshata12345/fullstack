
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ApiService } from 'src/app/service/api.service';
import { Company } from 'src/app/model/company';



@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  companyData: Company[];

  constructor(
    public fb: FormBuilder,
    public actRoute: ActivatedRoute,
    public apiService: ApiService,
    public router: Router
  ) { }

  ngOnInit() {
    this.updateCompany();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getCompany(id);
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      code: ['', [Validators.required]],
      location: ['', [Validators.required]]
    })
  }
  get myForm(){
    return this.editForm.controls;
  }
  getCompany(id:any) {
    this.apiService.getCompany(id).subscribe(data => {
      this.editForm.setValue({
        name: data['name'],
        code: data['code'],
        location: data['location'],
      });
    });
  }

  updateCompany() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      code: ['', [Validators.required]],
      location: ['', [Validators.required]]
     
    })
  }
  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateCompany(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/company-list');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
      return true;
    }
  }

  
}