import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent implements OnInit {

  constructor(public ac:ActivatedRoute,public stdSer:StudentService,public router:Router) { }

  ngOnInit(): void {
    this.ac.params.subscribe(a=>{
      this.stdSer.deleteStudent(a['_id']).subscribe(d=>{
        console.log("Deleted!")
        this.router.navigate(['/students'])
      })
     })
  }

}
