import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/student.service';
import { Event } from '@angular/router';
import { EventService } from 'src/app/event.service';
@Component({
  selector: 'app-studentevents',
  templateUrl: './studentevents.component.html',
  styleUrls: ['./studentevents.component.css']
})
export class StudenteventsComponent implements OnInit {
  public events : any[]=[];
  constructor(public ac:ActivatedRoute,public stdSer:StudentService) { }
  ngOnInit(): void {
    this.ac.params.subscribe(a=>{
      this.stdSer.showStudentEvents(a['_id']).subscribe(d=>{
          this.events = d;
          console.log(this.events);
       })
    })
}

}
