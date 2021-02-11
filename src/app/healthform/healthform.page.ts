import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { NavParams} from "@ionic/angular";

@Component({
  selector: 'app-healthform',
  templateUrl: './healthform.page.html',
  styleUrls: ['./healthform.page.scss'],
  providers: [NavParams],
})
export class HealthformPage implements OnInit {
  insertdata: any ={};
  constructor(
    public navCtrl: NavController,
    public http: HttpClient,
    public navParams: NavParams,
    public alertController: AlertController) { }


    ngOnInit() {
    }
  
  savehealthform(){
    let url = 'http://localhost/db_ifightcovid19/insertdatahealthquestion.php'

    let postdataset = new FormData();
    postdataset.append('healthquestion1',this.insertdata.healthquestion1);
    postdataset.append('healthquestion2',this.insertdata.healthquestion2);
    let callback:Observable<any> = this.http.post(url,postdataset);
    callback.subscribe(call =>{
      if(call.status == 200){
      }else{}});
    //   const alert = document.createElement('ion-alert');
    //  alert.message = 'บันทึกรายการเสร็จสมบูรณ์';
    //  alert.buttons = ['ตกลง'];
    //  document.body.appendChild(alert);
    //  return alert.present();
  }


}
