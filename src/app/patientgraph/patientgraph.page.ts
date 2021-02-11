import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  NavController,
  NavParams,
  AlertController,
} from "@ionic/angular";
declare var google;

@Component({
  selector: 'app-patientgraph',
  templateUrl: './patientgraph.page.html',
  styleUrls: ['./patientgraph.page.scss'],
  providers: [NavParams],
})
export class PatientgraphPage implements OnInit {
  patientgraph:any =[];
  constructor(
    public navCtrl: NavController,
    public http: HttpClient,
    public navParams: NavParams,
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










