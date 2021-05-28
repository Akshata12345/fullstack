import { Component, OnInit } from '@angular/core';
import { EmpApiService } from 'src/app/service/emp-api.service';



@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  Employee:any = [];
  
  
  constructor(public apiService: EmpApiService) {
    this.readEmployee();
   }

  ngOnInit() {
  }
  readEmployee(){
    
    this.apiService.getEmployees().subscribe((data:any) => {
     this.Employee = data;
    })    
  }

  removeEmployee(company:any, index:any) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteEmployee(company._id).subscribe((data) => {
          this.Employee.splice(index, 1);
        }
      )    
    }
  }

 
  

}