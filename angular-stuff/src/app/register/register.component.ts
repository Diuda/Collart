import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../services/validate.service';
import {AuthService} from '../services/auth.service';
import  {Router} from '@angular/router';
// import {FlashMessageService} from 'angular2-flash-message';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	email: String;
	username: String;
	password: String;
	name: String;
	contact: String;

  constructor(
    private ValidateService: ValidateService, 
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
  	console.log(this.username)

  	const user = {
  		name: this.name,
  		username: this.username,
  		password: this.password,
  		email: this.email,
  		contact: this.contact

  	};
  	if(!this.ValidateService.validateRegister(user)){
  // 		let flMsg = new FlashMessageService()
		// flMsg.message = 'Please Fill all the fields'; // string to be displayed in the notification, if empty flash message wont be dsiplayed
		// flMsg.isSuccess = true; // defaults to info
		// flMsg.timeoutInMS = 3000; // defaults to 6000	
		console.log(123)
  		alert("PLease fill all fields");
  	}

    this.authService.registerUser(user).subscribe(data => {
      if(data.success){
        alert("You are registered and can now log in")
        this.router.navigate(['/login'])
      }
      else{
        alert("something went wrong")
        this.router.navigate(['/register'])

      }
    })


  }

}
