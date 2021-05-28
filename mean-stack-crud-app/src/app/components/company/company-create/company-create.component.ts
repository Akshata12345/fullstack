import { Router } from '@angular/router';
import { Component, OnInit,NgZone } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.css']
})
export class CompanyCreateComponent implements OnInit {
  
  submitted = false;
  companyForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public router: Router,
    public ngZone: NgZone,
    public apiService: ApiService
  ) { this.mainForm(); }

  ngOnInit() {
  }
  mainForm() {
    this.companyForm = this.fb.group({
      name: ['', [Validators.required]],
      code: ['', [Validators.required]],
      location: ['', [Validators.required]]
    })
  }
   
 
  onSubmit() {
    this.submitted = true;
    if (!this.companyForm.valid) {
      return false;
    } else {
      this.apiService.createCompany(this.companyForm.value).subscribe(
        (res) => {
          console.log('company is successfully created!');
          
          this.ngZone.run(() => this.router.navigateByUrl('/company-list'))
        }, (error:any) => {
          console.log(error);
        });
        return true;
    }
  }

}