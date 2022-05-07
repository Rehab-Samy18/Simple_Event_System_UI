import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EventService } from 'src/app/event.service';
import { Event } from 'src/app/_models/event';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit,OnDestroy{
  event:Event=new Event(0,"",new Date(),"625addfdf3e905784e86ba5b",["625b19d4babafbebb13781d2"],[1]);
  constructor(public ac:ActivatedRoute,public eventSer:EventService) { }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.sub2?.unsubscribe();
    console.log("destroyed")
  }
  sub:Subscription|null=null;
  sub2:Subscription|null=null;
  ngOnInit(): void {
      this.sub = this.ac.params.subscribe(a=>{
       this.sub2 = this.eventSer.getEvent(a['_id']).subscribe(d=>{
          this.event=d
          console.log(d);
        })
     })
  }

}
