import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  NavController,
  NavParams,
  AlertController,
} from "@ionic/angular";
declare var google;

@Component({
  selector: 'app-veryriskystatus',
  templateUrl: './veryriskystatus.page.html',
  styleUrls: ['./veryriskystatus.page.scss'],
  providers: [NavParams],
})
export class VeryriskystatusPage implements OnInit {
  veryriskystatus:any =[];
  constructor(
    public navCtrl: NavController,
    public http: HttpClient,
    public navParams: NavParams,
    public alertController: AlertController) { 
      this.loaddata()

    }

    loaddata(){
      let url = " http://localhost/db_ifightcovid19/loaddatapatientveryriskystatus.php";
      this.http.get(url)
      .subscribe(data=> {
        if(data != null){
          this.veryriskystatus = data;
          console.log("done.",data);
        }
      },error=>{
        console.log("load fial.")
    
      });
    }
  ngOnInit() {
  }

}


