// import { Component, OnInit } from '@angular/core';
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
  selector: 'app-normalstatus',
  templateUrl: './normalstatus.page.html',
  styleUrls: ['./normalstatus.page.scss'],
  providers: [NavParams],
})
export class NormalstatusPage implements OnInit {
  patientgraph: any = [];
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
    let url = "http://localhost/db_ifightcovid19/loaddatapatientnormalstatus.php";
    let url2 = "http://localhost/db_ifightcovid19/load1.php";
    // this.user_id = sessionStorage.getItem('user_id') 
    // this.http.get(url + "/?id=" + this.user_id)
    this.http.get(url)
      .subscribe(data => {
        if (data != null) {
          this.patientgraph = data;
          for (let index = 0; index < this.patientgraph.length; index++) {
            this.http.get(url2 + "/?id=" + this.patientgraph[index].user_id).subscribe(datauser => {
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
    this.router.navigate(['/namenormal', id])
  }
  // namenormal
}

