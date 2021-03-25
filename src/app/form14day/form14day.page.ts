import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { NavParams } from "@ionic/angular";
import { async } from '@angular/core/testing';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-form14day',
  templateUrl: './form14day.page.html',
  styleUrls: ['./form14day.page.scss'],
  providers: [NavParams],
})
export class Form14dayPage implements OnInit {
  [x: string]: Object;
  latitude: any = 0; //latitude
  longitude: any = 0; //longitude

  insertdata: any = {};
  user_id: any;
  // user_id: string;
  constructor(
    public navCtrl: NavController,
    public http: HttpClient,
    public navParams: NavParams,
    public alertController: AlertController,
    private geolocation: Geolocation) { }

  ngOnInit() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  saveform14day() {
    let url = 'http://localhost/db_ifightcovid19/insertdata.php'
    this.user_id = sessionStorage.getItem('user_id') // รับค่า user_id จาก sessionStorage
    this.http.get(url + "/?id=" + this.user_id)

    let postdataset = new FormData();
    postdataset.append('symptom1', this.insertdata.symptom1);
    postdataset.append('symptom2', this.insertdata.symptom2);
    postdataset.append('symptom3', this.insertdata.symptom3);
    postdataset.append('symptom4', this.insertdata.symptom4);
    postdataset.append('symptom5', this.insertdata.symptom5);
    postdataset.append('symptom6', this.insertdata.symptom6);
    postdataset.append('symptom7', this.insertdata.symptom7);
    postdataset.append('lat', this.latitude);
    postdataset.append('lng', this.longitude);
    postdataset.append('user_id',this.user_id);

    let callback: Observable<any> = this.http.post(url, postdataset);
    callback.subscribe(call => {
      if (call.status == 200) {
      } else { }
    });
    const alert = document.createElement('ion-alert');
    alert.message = 'บันทึกรายการเสร็จสมบูรณ์';
    alert.buttons = ['ตกลง'];
    document.body.appendChild(alert);
    return alert.present();
  }

  //   callback.subscribe(async (call) => {   ///call back ข้อมูลกลับมา
  //     const alertSt = document.createElement('ion-alert');
  //     alertSt.message = call;
  //     alertSt.buttons = ['ตกลง'];
  //     document.body.appendChild(alertSt);
  //     alertSt.present();

  //     const alert = document.createElement('ion-alert');
  //     alert.message = 'บันทึกรายการเสร็จสมบูรณ์';
  //     alert.buttons = ['ตกลง'];
  //     document.body.appendChild(alert);
  //     await alert.present();
      
  //     console.log(call);

  //   });

  // }


}


