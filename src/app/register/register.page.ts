import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { NavParams} from "@ionic/angular";


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  providers: [NavParams],
})
export class RegisterPage implements OnInit {
  insertdata:any= [];
  constructor(    
    public navCtrl: NavController,
    public http: HttpClient,
    public navParams: NavParams,
    public alertController: AlertController) { }

  saveusers(){
    let url = 'http://localhost/db_ifightcovid19/insertdatausersmember.php'

    let postdataset = new FormData();
    postdataset.append('name',this.insertdata.name);
    postdataset.append('lastname',this.insertdata.lastname);
    postdataset.append('date_brithday',this.insertdata.date_brithday);
    postdataset.append('personid',this.insertdata.personid);
    postdataset.append('address',this.insertdata.address);
    postdataset.append('district',this.insertdata.district);
    postdataset.append('sub_district',this.insertdata.sub_district);
    postdataset.append('provine',this.insertdata.provine);
    postdataset.append('phone',this.insertdata.phone);
    let callback:Observable<any> = this.http.post(url,postdataset);
    callback.subscribe(call =>{
      if(call.status == 200){
      }else{}});
      const alert = document.createElement('ion-alert');
    alert.message = 'ลงทะเบียนเสร็จเรียบร้อย';
    alert.buttons = ['ตกลง'];
    document.body.appendChild(alert);
    return alert.present();
  }
  ngOnInit() {
  }

}
