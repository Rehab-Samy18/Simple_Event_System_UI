import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from 'src/app/event.service';
import { Event } from 'src/app/_models/event';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';
import { SpeakerService } from 'src/app/speaker.service';
import { Speaker } from 'src/app/_models/speaker';
@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent implements OnInit {
  public students:Student[]=[];
  public speakers:Speaker[]=[];
  constructor(public eventSer:EventService,public router:Router,public stdSer:StudentService,public speakerSer:SpeakerService) { }
//   formGroup:FormGroup =new FormGroup({
//     _id: new FormControl(''),
//     title: new FormControl(''),
//     eventDate: new FormControl(''),
//     mainSpeaker: new FormControl(''),
//     otherSpeakers: new FormControl(''),
//     students: new FormControl(''),
// })
  event:Event=new Event(0,"",new Date(),"625addfdf3e905784e86ba5b",["625b19d4babafbebb13781d2"],[1])
  ngOnInit(): void {
    this.stdSer.getAllStudents().subscribe(a=>{
      this.students = a ;
    })
    this.speakerSer.getAllSpeakers().subscribe(a=>{
      this.speakers = a ;
    })
  }
  save(){
    this.eventSer.createEvent(this.event).subscribe(a => {
      console.log(a);
      this.router.navigateByUrl('/events');
    })
  }
}
