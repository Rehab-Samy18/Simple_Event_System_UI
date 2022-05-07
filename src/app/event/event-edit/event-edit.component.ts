import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/event.service';
import { Event } from 'src/app/_models/event';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {

  constructor(public eventSer:EventService,public router:Router) { }
  event:Event=new Event(0,"",new Date(),"625addfdf3e905784e86ba5b",["625b19d4babafbebb13781d2"],[1])
  ngOnInit(): void {
    
  }
  save(){
    this.eventSer.editEvent(this.event).subscribe(a => {
      console.log("Edited!");
      this.router.navigateByUrl('/events');
    })
  }
}
