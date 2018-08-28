import { Component, OnInit } from '@angular/core';
import {AuthService} from './../service/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  Submit(form){
    this.authService.register(form.value.name, form.value.email, form.value.password);
    
  }

  // create(form){
  //      this.authService.create(form.value.userId, form.value.title, form.value.body);
  // }

}
