import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit,OnDestroy{
  student:Student=new Student(0,"","");
  constructor(public ac:ActivatedRoute,public stdSer:StudentService) { }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.sub2?.unsubscribe();
    console.log("destroyed")
  }
  sub:Subscription|null=null;
  sub2:Subscription|null=null;
  ngOnInit(): void {
    this.sub = this.ac.params.subscribe(a=>{
      this.sub2 = this.stdSer.getStudent(a['_id']).subscribe(d=>{
         this.student=d
         console.log(d);
       })
    })
  }

}
