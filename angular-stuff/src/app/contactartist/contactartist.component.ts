import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-contactartist',
  templateUrl: './contactartist.component.html',
  styleUrls: ['./contactartist.component.css']
})
export class ContactartistComponent implements OnInit {
	sub: Object;
	email:String;
	subject:String;
	content:String;
  constructor(private authService:AuthService,
  	private route: ActivatedRoute,
  	private rou: Router) { }

  ngOnInit() {
  	  	this.sub = this.route.params.subscribe(params=>{
  		this.email = params['artist'];
  	})
  }




  sendMail(email){

  	const mail = {
  		email:this.email,
  		subject:this.subject,
  		content:this.content
  	}
  	this.authService.mailArtist(mail).subscribe(data=>{
  		if(data.status==true){
  			alert("Your mail is been sent")
  			this.rou.navigate(['/dashboard'])
  		}
  		console.log(data)

  		
  	})
  }

}
