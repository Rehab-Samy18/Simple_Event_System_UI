import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/event.service';

@Component({
  selector: 'app-event-delete',
  templateUrl: './event-delete.component.html',
  styleUrls: ['./event-delete.component.css']
})
export class EventDeleteComponent implements OnInit {

  constructor(public ac:ActivatedRoute,public eventSer:EventService,public router:Router) { }

  ngOnInit(): void {
    this.ac.params.subscribe(a=>{
      this.eventSer.deleteEvent(a['_id']).subscribe(d=>{
        console.log("Deleted!")
        this.router.navigate(['/events'])
      })
     })
   }  
}
