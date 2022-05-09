import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-speaker-register',
  templateUrl: './speaker-register.component.html',
  styleUrls: ['./speaker-register.component.css']
})
export class SpeakerRegisterComponent implements OnInit {
  error: string='';
  formGroup:FormGroup =new FormGroup({
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    city: new FormControl(''),
    street: new FormControl(''),
    building: new FormControl(''),
})
  constructor(public authSer:AuthServiceService,public router:Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.formGroup = new FormGroup({
      email: new FormControl('',[Validators.required]),
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      city: new FormControl('',[Validators.required]),
      street: new FormControl('',[Validators.required]),
      building: new FormControl('',[Validators.required]),
    })
  }
  speakerRegisterProcess(){
    if(this.formGroup.valid){
      this.authSer.speakerRegister(this.formGroup.value).subscribe(
        result=> {
          console.log(result)
            this.router.navigateByUrl('login');
        },
      )
    }
  }
}
