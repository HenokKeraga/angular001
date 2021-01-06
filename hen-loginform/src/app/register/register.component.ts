import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,private router:Router
  ) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      email: [],
      password: [],
    });
  }

  register() {
    this.registerService.register(this.userForm.value).subscribe(res=>console.log(res));
    this.router.navigate(['/login']);
  }
}
