import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  NavController,
  NavParams,
  AlertController,
} from "@ionic/angular";
declare var google;
import { NavigationExtras } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-veryriskystatus',
  templateUrl: './veryriskystatus.page.html',
  styleUrls: ['./veryriskystatus.page.scss'],
  providers: [NavParams],
})
export class VeryriskystatusPage implements OnInit {
  veryriskystatus:any =[];
  // riskstatus:any =[];
  user_data: any = [];
  user_id: any;
  constructor(
    public navCtrl: NavController,
    public http: HttpClient,
    public navParams: NavParams,
    public router: Router,
    public alertController: AlertController) {
    this.loaddata()

  }

  loaddata() {
    let url = "http://localhost/db_ifightcovid19/loaddatapatientveryriskystatus.php";
    let url2 = "http://localhost/db_ifightcovid19/load1.php";
    // this.user_id = sessionStorage.getItem('user_id') 
    // this.http.get(url + "/?id=" + this.user_id)
    this.http.get(url)
      .subscribe(data => {
        if (data != null) {
          this.veryriskystatus = data;
          for (let index = 0; index < this.veryriskystatus.length; index++) {
            this.http.get(url2 + "/?id=" + this.veryriskystatus[index].user_id).subscribe(datauser => {
              this.user_data.push(datauser)
            })
          }
        }
      }, error => {
        console.log("load fial.")

      });
  }

  ngOnInit() {
  }

  routeTo(id) {
    this.router.navigate(['/nameveryriskstatus', id])
  }
  // namenormal
}

