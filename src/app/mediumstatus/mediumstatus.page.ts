import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  NavController,
  NavParams,
  AlertController,
} from "@ionic/angular";
declare var google;

@Component({
  selector: 'app-mediumstatus',
  templateUrl: './mediumstatus.page.html',
  styleUrls: ['./mediumstatus.page.scss'],
  providers: [NavParams],
})
export class MediumstatusPage implements OnInit {
  mediumstatus:any =[];
  constructor(
    public navCtrl: NavController,
    public http: HttpClient,
    public navParams: NavParams,
    public alertController: AlertController) { 
      this.loaddata()

    }

    loaddata(){
      let url = " http://localhost/db_ifightcovid19/loaddatapatientmediumstatus.php";
      this.http.get(url)
      .subscribe(data=> {
        if(data != null){
          this.mediumstatus = data;
          console.log("done.",data);
        }
      },error=>{
        console.log("load fial.")
    
      });
    }
  ngOnInit() {
  }

}

