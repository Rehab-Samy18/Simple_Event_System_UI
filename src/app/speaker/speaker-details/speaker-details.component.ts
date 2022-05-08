import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SpeakerService } from 'src/app/speaker.service';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-speaker-details',
  templateUrl: './speaker-details.component.html',
  styleUrls: ['./speaker-details.component.css']
})
export class SpeakerDetailsComponent implements OnInit,OnDestroy{
  speaker:Speaker=new Speaker("625addfdf3e905784e86ba5b","","","","","","");
  constructor(public ac:ActivatedRoute,public speakerSer:SpeakerService) { }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.sub2?.unsubscribe();
    console.log("destroyed")
  }
  sub:Subscription|null=null;
  sub2:Subscription|null=null;
  ngOnInit(): void {
    this.sub = this.ac.params.subscribe(a=>{
      this.sub2 = this.speakerSer.getSpeaker(a['_id']).subscribe(d=>{
         this.speaker=d
         console.log(d);
       })
    })
  }

}
