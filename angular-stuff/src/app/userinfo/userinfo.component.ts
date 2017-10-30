import { Component, OnInit } from '@angular/core';
// import {ViewartComponent} from '../viewart/viewart.component'
import {FetchdataService} from '../services/fetchdata.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
	userid:string;
	sub: any;
	user: Object;

  constructor(
  	  	private fetchdataService:FetchdataService,
  	  	private route: ActivatedRoute
  	  	) { }

  ngOnInit() {
  	this.sub = this.route.params.subscribe(params=>{
  		this.userid = params['name'];
  	})

  	this.fetchdataService.getUser(this.userid).subscribe(user=>{
  		// console.log(user[0])

  		this.user = user[0];
  		console.log(this.user)
  	},
  	err=>{
  		console.log(err);
  		return false;
  	})
  	// this.fetchdataService.getUser().subscribe(user=>{
  	// 	console.log(user)
  	// })

  	
  }

}
