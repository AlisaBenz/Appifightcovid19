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
  user_id: any; // รับค่า user_id จาก sessionStorage
  send: number=3 ;
  constructor(
    public navCtrl: NavController,
    public http: HttpClient,
    public navParams: NavParams,
    public alertController: AlertController) { }


    ngOnInit() {
    }
  
  savehealthform(){
    let url = 'http://localhost/db_ifightcovid19/insertdatahealthquestion.php'
    this.user_id = sessionStorage.getItem('user_id') // รับค่า user_id จาก sessionStorage
    this.http.get(url + "/?id=" + this.user_id)

    let postdataset = new FormData();
    postdataset.append('healthquestion1',this.insertdata.healthquestion1);
    postdataset.append('healthquestion2',this.insertdata.healthquestion2);
    postdataset.append('user_id',this.user_id);
    let callback:Observable<any> = this.http.post(url,postdataset);
    callback.subscribe(call =>{
      if(call.status == 200){
      }else{}});
      // const alert = document.createElement('ion-alert');
      // alert.message = 'บันทึกรายการเสร็จสมบูรณ์';
      // alert.buttons = ['ตกลง'];
      // document.body.appendChild(alert);
      // return alert.present();
    //   const alert = document.createElement('ion-alert');
    //  alert.message = 'บันทึกรายการเสร็จสมบูรณ์';
    //  alert.buttons = ['ตกลง'];
    //  document.body.appendChild(alert);
    //  return alert.present();
  }


}
