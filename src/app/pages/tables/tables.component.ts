import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../app/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
  providers: [ProductsService],
})
export class TablesComponent implements OnInit {
  public pageSize = 10;
  public page = 1;
  public phones =2;
  public logs;
  constructor(private _productsService: ProductsService, private router: Router) { }

  ngOnInit() {
    this._productsService.getLog().subscribe(response => {
      this.logs = response.data
      console.log(this.phones)
    }, error => {
      if (error.status == 403) {
        localStorage.clear()
        this.router.navigate(['/login'])
      }
      console.log(error.status);
    })
  }

  refreshCountries(){}

}
