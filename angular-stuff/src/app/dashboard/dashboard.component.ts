import { Component, OnInit } from '@angular/core';
import {FetchdataService} from '../services/fetchdata.service';
import  {Router} from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	allUsers: Object;

  constructor(
  	private fetchdataService:FetchdataService,
  	private router: Router
  	) { }

  ngOnInit() {

  	this.fetchdataService.getAllProfile().subscribe(users=>{
  		// for(let user of users.users)
  		this.allUsers = users.user
  		console.log(users.user)
  	}, 
  	err=>{
  		console.log(err);
  		return false
  	})
  }

  // contactArtist(){
  	
  // }

}
