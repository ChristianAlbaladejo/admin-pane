import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductsService {
  public url: string;
  public identify;
  public stats;

  constructor(public _http: HttpClient) {
    /* this.url = 'https://panesandco.herokuapp.com'; */
    /* this.url = "https://delivery.jnc.es"; */
    /* this.url = "http://localhost:8000/api"; */
    this.url = "http://cloudagoradelivery.audidata.es:8000/api"
  }

  addPhone(phone): Observable<any> {

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem("token")

    });
    let body = {
      "phone": phone
    }
    return this._http.post(this.url + '/addPhone', body, { headers: headers });
  }

  deletePhone(phone): Observable<any> {

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem("token")

    });
    return this._http.delete(this.url + '/phone/' + phone, { headers: headers });
  }

  getPhones(): Observable<any> {

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem("token")

    });

    return this._http.get(this.url + '/phones', { headers: headers });
  }

  getLog(): Observable<any> {

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem("token")

    });

    return this._http.get(this.url + '/log', { headers: headers });
  }

  getPhoneAction(): Observable<any> {

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem("token")

    });

    return this._http.get(this.url + '/phoneAction', { headers: headers });
  }

  patchPhoneAction(acceptPhoneActionType, acceptId, errorPhoneActionType, errorId): Observable<any> {

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem("token")

    });
    let body = {
      "acceptPhoneActionType": acceptPhoneActionType,
      "acceptId": acceptId,
      "errorPhoneActionType": errorPhoneActionType,
      "errorId": errorId
    }
    return this._http.put(this.url + '/phoneAction', body, { headers: headers });
  }
}
