import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
})
export class TemplateFormComponent implements OnInit {
  user: User = new User('', '', '', '', '');


  constructor() {}

  ngOnInit(): void {}
  submitData() {
 
    console.log('user data  : ', this.user);
  }
}
