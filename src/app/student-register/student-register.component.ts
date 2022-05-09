import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent implements OnInit {
  error: string='';
  formGroup:FormGroup =new FormGroup({
    _id: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
})
  constructor(public authSer:AuthServiceService,public router:Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.formGroup = new FormGroup({
      _id: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
    })
  }
  studentRegisterProcess(){
    if(this.formGroup.valid){
      this.authSer.studentRegister(this.formGroup.value).subscribe(
        result=> {
          console.log(result)
            this.router.navigateByUrl('login');
        },
      )
    }
  }
}
