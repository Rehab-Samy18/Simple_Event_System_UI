import { Component, Input, OnInit, Output } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  constructor(public stdSer:StudentService) { }
  students:Student[]=[];
  ngOnInit(): void {
    this.stdSer.getAllStudents().pipe().subscribe(a=>{
      this.students = a ;
    })
  }

}
