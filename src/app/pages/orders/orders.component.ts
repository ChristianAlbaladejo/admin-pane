import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../app/services/products.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers: [ProductsService]
})
export class OrdersComponent implements OnInit {
  orders = [];
  public viewMore: boolean = true;

  constructor(private _productsService: ProductsService, public http: HttpClient) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.viewMore = true;
    this.orders = [];
  }

  loadAll() {
    this.viewMore = false;
    this.orders = [];
  }



}
