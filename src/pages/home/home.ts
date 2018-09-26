import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from '../../providers/user-service/user-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  users:any;
  img: any[]=[];

  constructor(
    public navCtrl: NavController,
    public userService: UserService
  ) {}

  ionViewDidLoad(){
    this.userService.getUsers()
    .subscribe(
      (data) => { // Success
        this.users = data;
      },
      (error) =>{
        console.error(error);
      }
    )
    this.userService.getImage()
    .subscribe(
      (data1) =>{
        this.img =data1['results']
      }
    )
  }
}