import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { DomSanitizer} from '@angular/platform-browser';
import  {Router} from '@angular/router';

@Component({
  selector: 'app-myart',
  templateUrl: './myart.component.html',
  styleUrls: ['./myart.component.css']
})
export class MyartComponent implements OnInit {

	allMyArt:Object;

  constructor(private authService: AuthService,
  	  	private sanitizer: DomSanitizer,
  	  	private router: Router) { }

  ngOnInit() {

  	this.authService.myArt().subscribe(arts=>{
  		console.log(arts)

  		this.allMyArt = arts
  	}, 
  	err=>{
  		console.log(err);
  		return false;
  	})

  }

  deleteContent(title){
  	const videoInfo = {
  		title: title

  	}
  	this.authService.deleteArt(videoInfo).subscribe(data=>{
  		if(data.success==true){
  			this.ngOnInit();
  			// this.router.navigate(['/myart'])
  		}
  		else{
  			alert('Cannot delete this art')
  		}
  	}, err=>{
  		return false;
  	})
  }

}
