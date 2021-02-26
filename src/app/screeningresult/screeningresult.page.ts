import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { NavParams} from "@ionic/angular";
@Component({
  selector: 'app-screeningresult',
  templateUrl: './screeningresult.page.html',
  styleUrls: ['./screeningresult.page.scss'],
  providers: [NavParams],
})
export class ScreeningresultPage implements OnInit {
  datascreening:any =[];
  constructor(
    public navCtrl: NavController,
    public http: HttpClient,
    public navParams: NavParams,
    public alertController: AlertController) { 
      this.loaddata()
    }

    ngOnInit() {
    }
  
    loaddata(){
      let url = "http://localhost/db_ifightcovid19/loaddatascreening.php";
      this.http.get(url)
      .subscribe(data=> {
        if(data != null){
          this.datascreening = data;
          console.log("done.",data);
        }
      },error=>{
        console.log("load fial.")
    
      });
    }
  // ngOnInit() {
  // }

}
