import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-company' },
  {path: 'company',loadChildren : ()=>import('./components/company/company.module').then(module=>module.CompanyModule)},
  { path: '', pathMatch: 'full', redirectTo: 'create-employee' },
  {path: 'employee',loadChildren : ()=>import('./components/employee/employee.module').then(module=>module.EmployeeModule)},
  { path:'signup',component: UserComponent,
  children:[{path:'', component:SignUpComponent}]
},

{ path:'login',component: UserComponent,
children:[{path:'', component:SignInComponent}]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }