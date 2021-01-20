import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../app/services/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {
  users = [];
  constructor(private _userService: UserService, public http: HttpClient) { }

  ngOnInit(): void {
    this.getUsers();
  }


  getUsers(){
    this._userService.getUsers().subscribe(response =>{
      console.log(response);
      this.users = response;
    }, error =>{
      console.log(error);
    })
  }

}
