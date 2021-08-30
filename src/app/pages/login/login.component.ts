import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EnDeService } from 'src/app/commons/encrpyt-decrypt-util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validated_form!: FormGroup;
  user_name_required: string = "Username Required!";
  user_name_placeholder: string = "Please Enter Username";
  login_btn_name: string = "Login";
  password_required: string = "Password Required";
  password_placeholder:string = "Please Enter Passowrd";
  show_password: boolean = false;
  login_btn_loading: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private edService: EnDeService) {

  }

  submitForm():void{
    for(let i in this.validated_form.controls){
      this.validated_form.controls[i].markAsDirty();
      this.validated_form.controls[i].updateValueAndValidity();
    }
    if(this.validated_form.valid){
      this.login_btn_loading = true;
     let encrypt_token = this.edService.encryptData('12345', true);
     localStorage.setItem("token", encrypt_token);
     this.router.navigateByUrl("/home");
    }
  }

  ngOnInit() {
    this.validated_form= this.fb.group(
      {
        user_name: ['', [Validators.required]],
        password: ['', [Validators.required]]
      }
    )
  }

  clear_username(username: any){
    username = null;
    this.validated_form.controls.user_name.setValue(username);
  }

}
