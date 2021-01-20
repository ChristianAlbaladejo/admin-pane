import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../../app/models/user';
@Injectable()
export class UserService {
    public url: string;
    public identity;
    public stats;

    constructor(public _http: HttpClient) {
        /*  this.url = "https://panesandco.herokuapp.com"    */
      /* this.url = "http://localhost:8000/api"; */
         /* this.url = "http://localhost:8000/api"; */
      this.url = "https://audidata.herokuapp.com/api"
    }

    getIdentity() {
        let identity = JSON.parse(localStorage.getItem('identity'));

        if (identity != "undefined") {
            this.identity = identity;
        } else {
            this.identity = null;
        }

        return this.identity;
    }

    ifGetIdentity() {
        let identity = JSON.parse(localStorage.getItem('identity'));
        if (identity == null) {
            return true;
        } else {
            return false;
        }
    }

    login(user): Observable<any> {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        let body = {
          'email': user.email,
          'password': user.password
        }
        return this._http.post(this.url + '/login', body, { headers: headers });
    }

    addPhone(phone): Observable<any> {

        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        let body = {
          "phone": phone
        }
        return this._http.post(this.url + '/register', body, { headers: headers });
    }

    getUsers(): Observable<any> {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("token")
        });
        return this._http.get(this.url + '/admin/getUsers/', { headers: headers });
    }
}

