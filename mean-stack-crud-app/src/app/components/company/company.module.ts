import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyRoutingModule } from './company-route.module';
import { CompanyCreateComponent } from './company-create/company-create.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyComponent } from './company.component';


@NgModule({
  declarations: [
   
    CompanyCreateComponent,
    CompanyEditComponent,
    CompanyListComponent,
    CompanyComponent
    
   
  
 
  ],
  imports: [
   CommonModule,
   CompanyRoutingModule,
   FormsModule,
   ReactiveFormsModule
  ],
  providers: []
  
 
})
export class CompanyModule { }