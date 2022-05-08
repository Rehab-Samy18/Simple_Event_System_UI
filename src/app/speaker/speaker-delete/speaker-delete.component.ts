import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpeakerService } from 'src/app/speaker.service';

@Component({
  selector: 'app-speaker-delete',
  templateUrl: './speaker-delete.component.html',
  styleUrls: ['./speaker-delete.component.css']
})
export class SpeakerDeleteComponent implements OnInit {

  constructor(public ac:ActivatedRoute,public speakerSer:SpeakerService,public router:Router) { }

  ngOnInit(): void {
    this.ac.params.subscribe(a=>{
      this.speakerSer.deleteSpeaker(a['_id']).subscribe(d=>{
        console.log("Deleted!")
        this.router.navigate(['/speakers'])
      })
     })
  }

}
