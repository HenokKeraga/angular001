import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  userData:FormGroup
  constructor(private fb:FormBuilder,private loginService:LoginService ,private router:Router) {}

  ngOnInit(): void {
    this.userData=this.fb.group({
      email:[],
      password:[]
    })
  }

  login(){
    
    this.loginService.loginUser(this.userData.value).subscribe(res=>sessionStorage.setItem("TOKEN",res['token']))

    this.router.navigate(['/profile'])

  }

}
