import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../_models/student';

@Component({
  selector: 'app-student-edit-form',
  templateUrl: './student-edit-form.component.html',
  styleUrls: ['./student-edit-form.component.css']
})
export class StudentEditFormComponent implements OnInit {

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
      this.router.navigateByUrl('/studentpage');
    })
  }

}
