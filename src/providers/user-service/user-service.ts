import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class UserService {

  constructor(
    private http: HttpClient
  ) {}

  getUsers() {
     
      return this.http.get('https://sheltered-lake-83829.herokuapp.com/users');
    //return this.http.get('http://localhost:3000/api/v1/articulos');
  }
  getImage(){
    var imgg = this.http.get('https://randomuser.me/api/?results=2');
  return imgg
  }
}
