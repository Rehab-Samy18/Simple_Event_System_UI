import { Component, Input, OnInit } from '@angular/core';
import { EventService } from 'src/app/event.service';
import { Event } from 'src/app/_models/event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  constructor(public eventSer:EventService) { }
  events:Event[]=[];
  ngOnInit(): void {
    this.eventSer.getAllEvents().subscribe(a=>{
      this.events = a;
      });
  }
}
