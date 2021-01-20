import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../app/services/products.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {

  products = [];
  updateProducts = [];
  family = [];
  newProductPhoto ;
  newProductName = "";
  newProductFamily = "";
  newProductDesc = "";
  newProductPrice = "";
  constructor(private _productsService: ProductsService, public http: HttpClient) { }

  ngOnInit(): void {
  }

  save() {
    var body = {
      'products': JSON.stringify(this.updateProducts)
    };
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem("token")
    });
    this.http
      .post('https://delivery.jnc.es/admin/updateProducts/',
        body, { headers: headers })
      .subscribe(data => {
        location.reload();
      }, error => {
        console.error(error);
      });
  }

  checked(event: any, p) {
    if (event.currentTarget.checked) {
      this.updateProducts.push(p)
    } else {
      for (let i = 0; i < this.updateProducts.length; i++) {
        if (this.updateProducts[i].id == p.id) {
          this.updateProducts.splice(i, 1)
        }
      }
    }
  }

  async newImage(e) {
    var reader = new FileReader();
    reader.readAsDataURL(e.item(0));
    reader.onload = (event) => {
      this.newProductPhoto = reader.result
    }
  }

  async handleFileInput(e, p) {
    var reader = new FileReader();
    reader.readAsDataURL(e.item(0));
    reader.onload = (event) => {
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].id == p.id) {
          this.products[i].image = reader.result
          console.log(reader.result);
        }
      }
    }
  }

  createNewProduct(){
    if (this.newProductPhoto == "undefined") {
      this.newProductPhoto = ""
    }
    let product = {
      "image": this.newProductPhoto,
      "name": this.newProductName,
      "family": this.newProductFamily,
      "description": this.newProductDesc,
      "price": this.newProductPrice
    }
    console.log(product)
    var body = {
      'products': JSON.stringify(product)
    };

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem("token")
    });
    this.http
      .post('https://delivery.jnc.es/admin/newProduct/',
        body, { headers: headers })
      .subscribe(data => {
        location.reload();
      }, error => {
        console.error(error);

      });
  }

  delete(p) {
    var body = {
      'product': JSON.stringify(p)
    };
    console.log(p);

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem("token")
    });
    this.http
      .post('https://delivery.jnc.es/admin/deleteProduct/',
        body, { headers: headers })
      .subscribe(data => {
        location.reload();
      }, error => {
        console.error(error);
      });
  }
}
