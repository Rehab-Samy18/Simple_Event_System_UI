import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { StudentService } from '../student.service';
import { Student } from '../_models/student';

@Component({
  selector: 'app-studenthome',
  templateUrl: './studenthome.component.html',
  styleUrls: ['./studenthome.component.css']
})
export class StudenthomeComponent implements OnInit {

  constructor(public stdSer:StudentService) { }
  students:Student[]=[];
  ngOnInit(): void {
    this.stdSer.getAllStudents().pipe().subscribe(a=>{
      this.students = a ;
      console.log(this.students)
    })
  }

}
