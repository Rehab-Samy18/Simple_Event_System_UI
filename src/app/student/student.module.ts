import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { RouterModule } from '@angular/router';
import { StudentDeleteComponent } from './student-delete/student-delete.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudenteventsComponent } from './studentevents/studentevents.component';

@NgModule({
  declarations: [
    StudentListComponent,
    StudentDeleteComponent,
    StudentEditComponent,
    StudentDetailsComponent,
    StudenteventsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatSelectModule
  ],
  exports:[
    StudentListComponent
  ]
})
export class StudentModule { }
