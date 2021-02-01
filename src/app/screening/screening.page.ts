import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { NavParams} from "@ionic/angular";


@Component({
  selector: 'app-screening',
  templateUrl: './screening.page.html',
  styleUrls: ['./screening.page.scss'],
  providers: [NavParams],
})
export class ScreeningPage implements OnInit {
  addformquestion: any = [];
  insertdata: any ={};
  constructor(
    public navCtrl: NavController,
    public http: HttpClient,
    public navParams: NavParams,
    public alertController: AlertController) { 
      this.loaddata()
    }



    savescreening(){
      let url = 'http://localhost/db_ifightcovid19/insertdatascreening.php'
      let postdataset = new FormData();
      postdataset.append('questionnaire1',this.insertdata.questionnaire1);
      postdataset.append('questionnaire2',this.insertdata.questionnaire2);
      postdataset.append('questionnaire3',this.insertdata.questionnaire3);
      postdataset.append('questionnaire4',this.insertdata.questionnaire4);
      postdataset.append('questionnaire5',this.insertdata.questionnaire5);
      postdataset.append('questionnaire6',this.insertdata.questionnaire6);
      postdataset.append('questionnaire7',this.insertdata.questionnaire7);
      postdataset.append('questionnaire8',this.insertdata.questionnaire8);
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

   loaddata(){
      let url = "http://localhost/db_ifightcovid19/loaddataaddform.php";
      this.http.get(url)
      .subscribe(data=> {
        if(data != null){
          this.addformquestion = data;
          console.log("done.",data);
        }
      },error=>{
        console.log("load fial.")
    
      });
    }
  ngOnInit() {
  }

}
