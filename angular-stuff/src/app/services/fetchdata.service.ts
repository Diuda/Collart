import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class FetchdataService {
	authToken: any;
	user: any;
  searchUser: any;

  constructor(private http:Http) { }


  getAllProfile(){
  	var headers = new Headers();
    this.loadToken();
    // headers.append('Authorization', this.authToken)
    headers.append('Content-Type', 'application/json')
    // console.log(user)
    return this.http.get('http://localhost:3000/users', {headers:headers}).map(res=>res.json());  
  }

  getAllArt(){
    var headers = new Headers();
    this.loadToken();
    // headers.append('Authorization', this.authToken)
    headers.append('Content-Type', 'application/json')
    // console.log(user)
    return this.http.get('http://localhost:3000/art', {headers:headers}).map(res=>res.json());  
  }

  // setSearchUser(user){

  //   this.searchUser = user;
  //    console.log(this.searchUser)
  // }

  getUser(user){
    var headers = new Headers();
    this.loadToken();
    // headers.append('Authorization', this.authToken)
    headers.append('Content-Type', 'application/json')
    // console.log(this.searchUser)
    return this.http.get('http://localhost:3000/profile/'+user, {headers:headers}).map(res=>res.json());      
  }

    loadToken(){
    const token = localStorage.getItem('id_token')
    this.authToken = token
  }



}
