import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginform! : FormGroup ;
  constructor(public FormBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.loginform = this.FormBuilder.group({
      userName : ['' , Validators.required],
      password : ['' , Validators.required]
    })

  
  }
  get userName() {
    return this.loginform!.get('userName')
  }
  get password() {
    return this.loginform!.get('password')
  }

  get login() {
    return this.loginform!.controls;
  }

}
