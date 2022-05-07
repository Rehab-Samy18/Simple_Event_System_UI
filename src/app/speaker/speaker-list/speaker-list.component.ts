import { Component, OnInit } from '@angular/core';
import { SpeakerService } from 'src/app/speaker.service';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-speaker-list',
  templateUrl: './speaker-list.component.html',
  styleUrls: ['./speaker-list.component.css']
})
export class SpeakerListComponent implements OnInit {

  constructor(public speakerSer:SpeakerService) { }
  speakers:Speaker[]=[];
  ngOnInit(): void {
    this.speakerSer.getAllSpeakers().subscribe(a=>{
      this.speakers = a;
    })
  }

}
