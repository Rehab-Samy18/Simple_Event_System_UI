import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/event.service';
import { SpeakerService } from 'src/app/speaker.service';
import { StudentService } from 'src/app/student.service';
import { Event } from 'src/app/_models/event';
import { Speaker } from 'src/app/_models/speaker';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {
  public students:Student[]=[];
  public speakers:Speaker[]=[];
  constructor(public ac:ActivatedRoute,public eventSer:EventService,public router:Router,public speakerSer:SpeakerService,public stdSer:StudentService) { }
  event:Event=new Event(0,"",new Date(),"625addfdf3e905784e86ba5b",["625b19d4babafbebb13781d2"],[1])
  ngOnInit(): void {
    this.ac.params.subscribe(a=>{
      this.eventSer.getEvent(a['_id']).subscribe(d=>{
         this.event=d
       })
    })
    this.stdSer.getAllStudents().subscribe(a=>{
      this.students = a ;
    })
    this.speakerSer.getAllSpeakers().subscribe(a=>{
      this.speakers = a ;
    })
  }
  save(){
    this.eventSer.editEvent(this.event).subscribe(a => {
      console.log("Edited!");
      this.router.navigateByUrl('/events');
    })
  }
}
