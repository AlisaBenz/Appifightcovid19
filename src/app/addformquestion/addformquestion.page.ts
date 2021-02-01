import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { NavParams} from "@ionic/angular";


@Component({
  selector: 'app-addformquestion',
  templateUrl: './addformquestion.page.html',
  styleUrls: ['./addformquestion.page.scss'],
  providers: [NavParams],
})
export class AddformquestionPage implements OnInit {


  insertdata: any ={};
  constructor(
    public navCtrl: NavController,
    public http: HttpClient,
    public navParams: NavParams,
    public alertController: AlertController) { }


    saveaddformquestion(){
      let url = 'http://localhost/db_ifightcovid19/insertdataaddform.php'
  
      let postdataset = new FormData();
      postdataset.append('addform1',this.insertdata.addform1);
      postdataset.append('addform2',this.insertdata.addform2);
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

