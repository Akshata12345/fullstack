import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';



@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  Company:any = [];
  
  
  constructor(public apiService: ApiService) {
    this.readCompany();
   }

  ngOnInit() {
  }
  readCompany(){
    
    this.apiService.getCompanies().subscribe((data:any) => {
     this.Company = data;
    })    
  }

  removeCompany(company:any, index:any) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteCompany(company._id).subscribe((data) => {
          this.Company.splice(index, 1);
        }
      )    
    }
  }

 
  

}