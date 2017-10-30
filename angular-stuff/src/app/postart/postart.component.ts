import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import  {Router} from '@angular/router';

@Component({
  selector: 'app-postart',
  templateUrl: './postart.component.html',
  styleUrls: ['./postart.component.css']
})
export class PostartComponent implements OnInit {

	title: String;
	username: String;
	link: String;
	desc: String;
	type:String;

  constructor(
    private authService: AuthService,
    private router: Router
  	) { }

  ngOnInit() {
  	console.log(this.authService.loadUsername())
  	this.username = this.authService.loadUsername()
  }


  submitArt(){

  	const art = {
  		title: this.title,
  		username: this.username,
  		link: "https://www.youtube.com/embed/" +this.link,
  		desc: this.desc,
  		type: this.type
  	}

  	console.log(art)

  	this.authService.sendArt(art).subscribe(data=>{
  		if(data.success){
  		alert("your art is posted")
        this.router.navigate(['/viewart'])
  		}
  		else{
         alert("something went wrong")
        this.router.navigate(['/postart']) 			
  		}
  	})

  }

}
