import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../app/services/products.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-familyes',
  templateUrl: './familyes.component.html',
  styleUrls: ['./familyes.component.css'],
  providers: [ProductsService]
})
export class FamilyesComponent implements OnInit {
  family = [];
  updateFamiyes = [];
  newFamilyPhoto;
  newFamilyName = "";

  constructor(private _productsService: ProductsService, public http: HttpClient) { }

  ngOnInit(): void {
   
  }

  checked(event: any, f) {
    if (event.currentTarget.checked) {
      this.updateFamiyes.push(f)
    } else {
      for (let i = 0; i < this.updateFamiyes.length; i++) {
        if (this.updateFamiyes[i].id == f.id) {
          this.updateFamiyes.splice(i, 1)
        }
      }
    }
  }

  async handleFileInput(e, f) {
    var reader = new FileReader();
    reader.readAsDataURL(e.item(0));
    reader.onload = (event) => {
      for (let i = 0; i < this.family.length; i++) {
        if (this.family[i].id == f.id) {
          this.family[i].image = reader.result
          console.log(this.family[i]);
        }
      }
    }
  }

  async newImage(e) {
    var reader = new FileReader();
    reader.readAsDataURL(e.item(0));
    reader.onload = (event) => {
          this.newFamilyPhoto = reader.result
      }
    }

    createNewFamily() {
      let family = {
        "image": this.newFamilyPhoto,
        "name": this.newFamilyName
      }
      console.log(family)
      var body = {
        'family': JSON.stringify(family)
      };

      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem("token")
      });
      this.http
        .post('https://delivery.jnc.es/admin/newFamily/',
          body, { headers: headers })
        .subscribe(data => {
          location.reload();
        }, error => {
          console.error(error);

        });
    }

    delete(f){
      var body = {
        'family': JSON.stringify(f)
      };
      console.log(f);

      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem("token")
      });
      this.http
        .post('https://delivery.jnc.es/admin/deleteFamily/',
          body, { headers: headers })
        .subscribe(data => {
          location.reload();
        }, error => {
          console.error(error);
        });
    }

  save() {
    var body = {
      'family': JSON.stringify(this.updateFamiyes)
    };
    console.log(this.updateFamiyes);

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem("token")
    });
    this.http
      .post('https://delivery.jnc.es/admin/updateFamily/',
        body, { headers: headers })
      .subscribe(data => {
        location.reload();
      }, error => {
        console.error(error);

      });
  }
}
