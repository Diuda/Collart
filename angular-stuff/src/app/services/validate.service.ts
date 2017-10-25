import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user){
  	if(user.email==undefined||user.username==undefined||user.password==undefined||user.name==undefined||user.contact==undefined)
  		return false;
  	else
  		return true;
  }

}
