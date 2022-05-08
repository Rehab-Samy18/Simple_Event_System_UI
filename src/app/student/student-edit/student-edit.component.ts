import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  constructor(public ac:ActivatedRoute,public stdSer:StudentService,public router:Router) { }
  student:Student=new Student(0,"","");
  ngOnInit(): void {
    this.ac.params.subscribe(a=>{
      this.stdSer.getStudent(a['_id']).subscribe(d=>{
         this.student=d
       })
    })
  }
  save(){
    this.stdSer.editStudent(this.student).subscribe(a => {
      console.log("Edited!");
      this.router.navigateByUrl('/students');
    })
  }
}
