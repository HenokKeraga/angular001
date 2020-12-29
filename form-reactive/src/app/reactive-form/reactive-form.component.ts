import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from './mismatch.validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group(
      {
        fullName: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        address: ['', [Validators.required]],
        city: ['', [Validators.required]],
        phoneNo: ['', [Validators.required, Validators.maxLength(10)]],
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validators: ConfirmPasswordValidator.matchPassword
      }
    );
  }

  submitData() {
    console.log('form :: ', this.userForm);
  }
}
