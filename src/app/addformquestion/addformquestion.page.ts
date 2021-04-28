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
  toString:any={};
  // id:any={};
  constructor(
    public navCtrl: NavController,
    public http: HttpClient,
    public navParams: NavParams,
    public atrCtrl: AlertController) { }

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
    
        const alert = document.createElement('ion-alert');
      alert.message = 'ลงทะเบียนเสร็จเรียบร้อย';
      alert.buttons = ['ตกลง'];
      document.body.appendChild(alert);
      return alert.present();
    });
    
    }
    deleteaddformquestion(){
      const alert = document.createElement('ion-alert');
      alert.message = 'คุณต้องการลบแบบฟอร์มที่ได้บันทึกไปแล้ว หรือไม่?';
      alert.buttons = [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'ใช่',
          handler: () => {this.deletedataaddformquestion()}
        } 
      ];
        document.body.appendChild(alert);
        return alert.present();
      }
  deletedataaddformquestion(){
      let url = 'http://localhost/db_ifightcovid19/deleteformquestion.php'
      let postdata = new FormData();
      postdata.append('addform_id',toString());
      this.http.post(url,postdata).subscribe(data => {
        if(data != null){
            console.log("done.")
        }
      },error=>{ console.log("done")}); 
    
  }
}
