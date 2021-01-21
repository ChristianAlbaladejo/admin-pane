import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { ProductsService } from '../../../app/services/products.service';
import { Router } from '@angular/router';

// core components
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [ProductsService],
})
export class DashboardComponent implements OnInit {

  public datasets: any;
  public data: any;
  public phone = "";
  public phones = []
  public limit = 5;
  public pageSize = 10;
  public page = 1;
  public pagination = 0;
  public show = false;
  public showError = false;
  public identity;
  public acceptPhoneActionType;
  public acceptId;
  public errorPhoneActionType;
  public errorId;
  public phoneAction;
  public cases = [
    { value: "EXTERNAL_REQUEST", name: "Petición externa" },
    { value: "RING_GROUP", name: "Grupo de tono" },
    { value: "IVR", name: "IVR" },
    { value: "ANNOUNCEMENT", name: "Anuncio" },
    { value: "CUSTOM_VOICEMAIL", name: "Correo de voz personalizado" },
    { value: "QUEUE", name: "Cola" }]
  constructor(private _productsService: ProductsService, private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
    this.identity = JSON.parse(localStorage.getItem('identity'));
    this.load()
    /*   this.datasets = [
        [0, 20, 10, 60, 15, 40, 20, 60, 60],
        [0, 20, 5, 25, 10, 30, 15, 40, 40]
      ];
      this.data = this.datasets[0];


      var chartOrders = document.getElementById('chart-orders');

      parseOptions(Chart, chartOptions());

      console.log(this.char)
      setTimeout(() => {
        var ordersChart = new Chart(chartOrders, {
          type: 'bar',
          options: chartExample2.options,
          data: {
            labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [
              {
                label: "Sales",
                data: [this.char[0], this.char[1], this.char[2], this.char[3], this.char[4], this.char[5], this.char[6], this.char[7], this.char[8], this.char[9], this.char[10], this.char[11]]
              }
            ]
          }
        });
      }, 700);
      var chartSales = document.getElementById('chart-sales');



      this.salesChart = new Chart(chartSales, {
        type: 'line',
        options: chartExample1.options,
        data: chartExample1.data
      }); */
  }

  load() {
    this._productsService.getPhones().subscribe(response => {
      this.phones = response.data
      this.pagination = Math.ceil(2.16)
      console.log(this.phones)
    }, error => {
      if (error.status == 403) {
        localStorage.clear()
        this.router.navigate(['/login'])
      }
      console.log(error.status);
    })

    this._productsService.getPhoneAction().subscribe(response => {
      this.phoneAction = response.data[0]
      console.log(this.phoneAction)
    }, error => {
      if (error.status == 403) {
        localStorage.clear()
        this.router.navigate(['/login'])
      }
      console.log(error.status);
    })
  }

  public changeListener(files: FileList) {
    let upload;
    console.log(files);
    if (files && files.length > 0) {
      let file: File = files.item(0);
      console.log(file.name);
      console.log(file.size);
      console.log(file.type);
      let reader: FileReader = new FileReader();
      reader.readAsText(file);
      reader.onload = async (e) => {
        let csv: string = reader.result as string;
        console.log(csv.split(/\r?\n/));
        upload = csv.split(/\r?\n/)
        let flag = false;
        for (let i = 0; i < upload.length; i++) {
          await this._productsService.addPhone(upload[i]).subscribe(response => {
            console.log(i)
            if (i == upload.length - 1) {
              flag = true;
            }
            if (flag) {
              console.log('asd')
              this.show = true;
              setTimeout(() => {
                this.show = false;
              }, 3000);
            }
          }, error => {
            if (error.status == 403) {
              localStorage.clear()
              this.router.navigate(['/login'])
            }
            this.showError = true;
            setTimeout(() => {
              this.showError = false;
            }, 3000);
            console.log(error.status);
          })
        }
        this.load()
      }
    }
  }

  public addPhone() {
    this._productsService.addPhone(this.phone).subscribe(response => {
      this.phone = ""
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, 3000);
      this.load()
    }, error => {
      if (error.status == 403) {
        localStorage.clear()
        this.router.navigate(['/login'])
      }
      this.showError = true;
      setTimeout(() => {
        this.showError = false;
      }, 3000);
      console.log(error.status);
    })
  }

  public deletePhone(i) {
    this._productsService.deletePhone(i).subscribe(response => {
      this.load()
    }, error => {
      if (error.status == 403) {
        localStorage.clear()
        this.router.navigate(['/login'])
      }
      console.log(error.status);
    })
  }

  filter(e) {
    if (e == "") {
      this.load()
    } else {
      this.phones = this.phones.filter(function (ele) {
        let arrayelement = ele.phone.toString()
        return arrayelement.includes(e)
      })
    }
  }

  refreshCountries() {
    console.log(this.pageSize)
  }

  patchPhoneAction() {
    this._productsService.patchPhoneAction(this.phoneAction.acceptPhoneActionType, this.phoneAction.acceptId, this.phoneAction.errorPhoneActionType, this.phoneAction.errorId).subscribe(response => {
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, 3000);
    }, error => {
      if (error.status == 403) {
        localStorage.clear()
        this.router.navigate(['/login'])
      }
      this.showError = true;
      setTimeout(() => {
        this.showError = false;
      }, 3000);
      console.log(error.status);
    })
  }
}
