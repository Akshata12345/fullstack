import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    MatTabsModule
  ],
  exports:[
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    MatTabsModule
  ]
})
export class MaterialModule { }
