import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { NavParams} from "@ionic/angular";

@Component({
  selector: 'app-form14day',
  templateUrl: './form14day.page.html',
  styleUrls: ['./form14day.page.scss'],
  providers: [NavParams],
})
export class Form14dayPage implements OnInit {

  
  insertdata: any ={};
  constructor(
    public navCtrl: NavController,
    public http: HttpClient,
    public navParams: NavParams,
    public alertController: AlertController) { }


    saveform14day(){
      let url = 'http://localhost/db_ifightcovid19/insertdata.php'
  
      let postdataset = new FormData();
      postdataset.append('symptom1',this.insertdata.symptom1);
      postdataset.append('symptom2',this.insertdata.symptom2);
      postdataset.append('symptom3',this.insertdata.symptom3);
      postdataset.append('symptom4',this.insertdata.symptom4);
      postdataset.append('symptom5',this.insertdata.symptom5);
      postdataset.append('symptom6',this.insertdata.symptom6);
      postdataset.append('symptom7',this.insertdata.symptom7);
      let callback:Observable<any> = this.http.post(url,postdataset);
      callback.subscribe(call =>{
        if(call.status == 200){
        }else{}});
        const alert = document.createElement('ion-alert');
      alert.message = 'บันทึกรายการเสร็จสมบูรณ์';
      alert.buttons = ['ตกลง'];
      document.body.appendChild(alert);
      return alert.present();
    }




  ngOnInit() {
  }

}
