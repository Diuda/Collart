import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {FetchdataService} from '../services/fetchdata.service';
import { DomSanitizer} from '@angular/platform-browser';


import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'app-viewart',
  templateUrl: './viewart.component.html',
  styleUrls: ['./viewart.component.css']
})
export class ViewartComponent implements OnInit {
	allArt: Object;
  user: String;
	// searchTerms: new Subject<string>();
	

  constructor(
	private authService: AuthService,
  	private fetchdataService:FetchdataService,
  	private sanitizer: DomSanitizer
  	) { }

  ngOnInit() {

  	this.fetchdataService.getAllArt().subscribe(arts=>{
  		
  		this.allArt = arts.art;
  		console.log(this.allArt)
  	}, 
  	err=>{
  		console.log(err);
  		return false;
  	})

  	// this.searchTerms.debounceTime(3000).distinctUntilChanged().switchMap(term=>)

  }

  likeCounter(title, count){
    console.log(count)
    var videoLike = parseInt(count) + 1
    const like = {
      title: title,
      likes: videoLike
    }
    this.authService.getLikes(like).subscribe(data=>{
      console.log(data)
      this.ngOnInit()

      // this.allArt = data.art
    },
    err=>{
      console.log(err)
      return false;
    })
  }
  // search(term){
  // 	this.searchTerms.next(term)
  // }

}
