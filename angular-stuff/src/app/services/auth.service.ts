import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {
	authToken: any;
	user: any;
  art: any;

  constructor(private http: Http) { }
  

  registerUser(user){	
  	var headers = new Headers();
  	headers.append('Content-Type', 'application/json')
  	console.log(user)
  	return this.http.post('http://localhost:3000/register', user, {headers:headers}).map(res=>res.json()); 
  }

  loginUser(user){
   	var headers = new Headers();
  	headers.append('Content-Type', 'application/json')
  	console.log(user)
  	return this.http.post('http://localhost:3000/authenticate', user, {headers:headers}).map(res=>res.json());  	
  }

  getProfile(){
    var headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken)
    headers.append('Content-Type', 'application/json')
    // console.log(user)
    return this.http.get('http://localhost:3000/profile', {headers:headers}).map(res=>res.json());  
  }

  storeUserData(token, user){
    // console.log(JSON.stringify(user.username))
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', user.username);
    this.authToken = token;
    this.user = user;
  }

  removeUserData(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  loadToken(){
    const token = localStorage.getItem('id_token')
    this.authToken = token
  }

  loadUsername(){
    const username = localStorage.getItem('user')
    this.user = username;
    return this.user;
  }

    sendArt(art){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json')
    console.log(art)
    return this.http.post('http://localhost:3000/art', art, {headers:headers}).map(res=>res.json()); 
  }

    getArt(){
    var headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken)
    headers.append('Content-Type', 'application/json')
    // console.log(user)
    return this.http.get('http://localhost:3000/profile', {headers:headers}).map(res=>res.json());  
  }


  getLikes(like){
   var headers = new Headers();
  this.loadToken();
  // headers.append('Authorization', this.authToken)
  headers.append('Content-Type', 'application/json')
  // console.log(user)
  return this.http.post('http://localhost:3000/likes', like, {headers:headers}).map(res=>res.json());  
  }
}


