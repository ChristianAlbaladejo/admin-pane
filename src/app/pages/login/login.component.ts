import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../../app/models/user';
import { UserService } from '../../../app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UserService],
})
export class LoginComponent implements OnInit, OnDestroy {
  public user: User;
  public token;
  public identity;
  constructor(private _router: Router,
    private _userService: UserService) {
    this.user = new User("", "", "", "", "", "", "", "", "");
  }

  ngOnInit() {
  }
  ngOnDestroy() {
  }

  login() {
    // loguear al usuario y conseguir sus datos
    this._userService.login(this.user).subscribe(
      response => {
        this.identity = response.user;
        this.token = response.token;
        localStorage.setItem('identity', JSON.stringify(this.identity));
        localStorage.setItem('token', this.token);
          this._router.navigate(['/dashboard']);
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
      }
    );
  }

}
