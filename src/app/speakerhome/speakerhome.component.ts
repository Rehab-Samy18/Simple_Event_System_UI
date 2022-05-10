import { Component, OnInit } from '@angular/core';
import { SpeakerService } from '../speaker.service';
import { Speaker } from '../_models/speaker';

@Component({
  selector: 'app-speakerhome',
  templateUrl: './speakerhome.component.html',
  styleUrls: ['./speakerhome.component.css']
})
export class SpeakerhomeComponent implements OnInit {

  constructor(public speakerSer:SpeakerService) { }
  speakers:Speaker[]=[];
  ngOnInit(): void {
    this.speakerSer.getAllSpeakers().pipe().subscribe(a=>{
      this.speakers = a ;
      console.log(this.speakers)
    })
  }

}
