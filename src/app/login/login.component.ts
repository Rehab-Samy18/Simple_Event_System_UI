import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: string='';
  formGroup:FormGroup =new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
})
  constructor(public authSer:AuthServiceService,public router:Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.formGroup = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
    })
  }
  loginProcess(){
    if(this.formGroup.valid){
      this.authSer.login(this.formGroup.value).subscribe(
        result=> {
          console.log(result.msg)
          if(result.msg=='Student Login Not Successful' || result.msg=='Speaker Login Not Successful')
          {
            this.router.navigateByUrl('login');
            this.error = 'Wrong Username Or Password'
          }
          else if(result.msg==="Admin")
          {
            localStorage.setItem('token',result.token);
            this.router.navigateByUrl('adminpage');
          }
          else if(result.msg==="Student")
          {
            localStorage.setItem('token',result.token);
            this.router.navigateByUrl('studentpage');
          }
          else if(result.msg==="Speaker")
          {
            localStorage.setItem('token',result.token);
            this.router.navigateByUrl('speakerpage');
          }
        },
      )
    }
  }
}
