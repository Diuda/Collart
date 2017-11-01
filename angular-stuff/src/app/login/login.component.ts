import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import  {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	username: String;
	password: String;

  constructor(
  	private AuthService:AuthService,
  	private router: Router
  	) { }

  ngOnInit() {
  }

  onLoginSubmit(){
  	const user = {
  		username: this.username,
  		password: this.password
  	}
  	this.AuthService.loginUser(user).subscribe(data => {

  		if(data.success){
        this.AuthService.storeUserData(data.token, data.user)
        this.router.navigate(['/editprofile'])
  			console.log(data)
  		}
  		else{
        console.log(data)
        this.router.navigate(['/login'])
  			console.log("error")
  		}
  	})
  }


}
