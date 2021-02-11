import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  NavController,
  NavParams,
  AlertController,
} from "@ionic/angular";
declare var google;

@Component({
  selector: 'app-riskystatus',
  templateUrl: './riskystatus.page.html',
  styleUrls: ['./riskystatus.page.scss'],
  providers: [NavParams],
})
export class RiskystatusPage implements OnInit {
  riskstatus:any =[];
  constructor(
    public navCtrl: NavController,
    public http: HttpClient,
    public navParams: NavParams,
    public alertController: AlertController) { 
      this.loaddata()

    }

    loaddata(){
      let url = " http://localhost/db_ifightcovid19/loaddatapatientriskstatus.php";
      this.http.get(url)
      .subscribe(data=> {
        if(data != null){
          this.riskstatus = data;
          console.log("done.",data);
        }
      },error=>{
        console.log("load fial.")
    
      });
    }
  ngOnInit() {
  }

}








