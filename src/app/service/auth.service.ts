import {Http} from '@angular/http';
import { Injectable } from '@angular/core';
import {CONFIG} from './../config/config';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 

  constructor(private http: Http, private router: Router) { }

  register(name: string, email: string, password: string){

    const userdata={name: name, email: email, password: password};

    // post data to the register endpoint
    // convert the observable response to promise
    // store data in local storage
    return this.http.post(`${CONFIG.API_URL}/register`, userdata).toPromise().then((response)=>{
          let token = response.json().token;
          let user = response.json().user.data;

         //Store token and user details in local storage
          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify(user));
          
          this.router.navigate(['/dashboard'])
          
        }, error=> console.log(error));
 
  }



}
