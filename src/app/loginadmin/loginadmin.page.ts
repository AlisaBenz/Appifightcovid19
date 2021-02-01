import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { NavParams} from "@ionic/angular";

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.page.html',
  styleUrls: ['./loginadmin.page.scss'],
  providers: [NavParams],
})
export class LoginadminPage implements OnInit {
  insertdata:any= [];
  constructor(    
    public navCtrl: NavController,
    public http: HttpClient,
    public navParams: NavParams,
    public alertController: AlertController) { }

    saveloginaddmin(){
      let url = 'http://localhost/db_ifightcovid19/insertdataloginaddmin.php'
  
      let postdataset = new FormData();
      postdataset.append('username',this.insertdata.username);
      postdataset.append('password',this.insertdata.password);
      let callback:Observable<any> = this.http.post(url,postdataset);
      callback.subscribe(call =>{
        if(call.status == 200){
        }else{}});
      //   const alert = document.createElement('ion-alert');
      // alert.message = 'บันทึกรายการเสร็จสมบูรณ์';
      // alert.buttons = ['ตกลง'];
      // document.body.appendChild(alert);
      // return alert.present();
    }
    ngOnInit() {
    }
  
  }