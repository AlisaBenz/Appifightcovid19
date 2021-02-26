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
  patientgraph:any =[];
  constructor(
    public navCtrl: NavController,
    public http: HttpClient,
    public navParams: NavParams,
    public router:Router,
    public alertController: AlertController) { 
      this.loaddata()

    }

    loaddata(){
      let url = "http://localhost/db_ifightcovid19/loaddatapatientnormalstatus.php";
      this.http.get(url)
      .subscribe(data=> {
        if(data != null){
          this.patientgraph = data;
          console.log("done.",data);
        }
      },error=>{
        console.log("load fial.")
    
      });
    }

  ngOnInit() {
  }

}

