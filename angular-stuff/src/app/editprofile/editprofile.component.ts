import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
	user: Object;
	username:String;
	name:String;
	type:String;
	experience:String;
	profession:String;
	city:String;


  constructor(private authService:AuthService) { }

  ngOnInit() {

  	// this.user = {username:this.authService.loadUsername()}
    // const u = {
    //   username:this.authService.loadUsername()
    // }
    // this.authService.details(u).subscribe(user=>{
    //   // console.log(user[0])
    //   this.user = user[0]
    //   console.log(this.user)
    // },err=>{
    //   return false;
    // })
  	// console.log(this.user)
  		// this.user = user
  }

  editProfile(username, name, type, exp, profess, city){
  	const updateUser = {
  		username: username,
  		name: name,
  		type: type,
  		experience:exp,
  		profession: profess,
  		city: city
  	}

  	console.log(updateUser);

  	this.authService.saveProfile(updateUser).subscribe(data=>{
      console.log(data)
  		if(data.success==true){
  			alert("Details Updated successfully")
  		}
  	})
  }

}
