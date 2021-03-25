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
    public atrCtrl: AlertController) { }

    // showConfirmAlert() {
    //   let alertConfirm = this.atrCtrl.create({
    //     // title: 'Delete Items',
    //     message: 'Are You Sure to delete this itemss?',
    //     buttons: [
    //       {
    //         text: 'No',
    //         role: 'cancel',
    //         handler: () => {
    //           console.log('No clicked');
    //         }
    //       },
    //       {
    //         text: 'Yess',
    //         handler: () => {
    //           console.log('Yes clicked');
    //         }
    //       }
    //     ]
    //   });
    //   // alertConfirm.present();
    //   await alert.present();
    // }

    
  ngOnInit() {
  }

    saveaddformquestion(){
      let url = 'http://localhost/db_ifightcovid19/insertdataaddform.php'

      

  
      let postdataset = new FormData();
      postdataset.append('addform1',this.insertdata.addform1);
      postdataset.append('addform3',this.insertdata.addform3);
      postdataset.append('addform4',this.insertdata.addform4);
      postdataset.append('addform5',this.insertdata.addform5);
      postdataset.append('addform6',this.insertdata.addform6);
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




 
}

