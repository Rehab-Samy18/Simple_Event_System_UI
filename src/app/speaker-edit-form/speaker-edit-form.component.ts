import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpeakerService } from '../speaker.service';
import { Speaker } from '../_models/speaker';

@Component({
  selector: 'app-speaker-edit-form',
  templateUrl: './speaker-edit-form.component.html',
  styleUrls: ['./speaker-edit-form.component.css']
})
export class SpeakerEditFormComponent implements OnInit {

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
      this.router.navigateByUrl('/speakerpage');
    })
  }

}
