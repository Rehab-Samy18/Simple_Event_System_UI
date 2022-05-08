import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpeakerService } from 'src/app/speaker.service';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-speaker-edit',
  templateUrl: './speaker-edit.component.html',
  styleUrls: ['./speaker-edit.component.css']
})
export class SpeakerEditComponent implements OnInit {
  constructor(public ac:ActivatedRoute,public speakerSer:SpeakerService,public router:Router) { }
  speaker:Speaker=new Speaker("625addfdf3e905784e86ba5b","","","","","","");
  ngOnInit(): void {
    this.ac.params.subscribe(a=>{
      this.speakerSer.getSpeaker(a['_id']).subscribe(d=>{
         this.speaker=d
       })
    })
  }
  save(){
    this.speakerSer.editSpeaker(this.speaker).subscribe(a => {
      console.log("Edited!");
      this.router.navigateByUrl('/speakers');
    })
  }
}
