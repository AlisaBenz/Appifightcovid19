import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { NavParams} from "@ionic/angular";
import { Router} from '@angular/router'
@Component({
  selector: 'app-checkuser',
  templateUrl: './checkuser.page.html',
  styleUrls: ['./checkuser.page.scss'],
  providers: [NavParams],
})
export class CheckuserPage implements OnInit {
  datausersmember:any =[];
  send: number=3 ;
  constructor(
    public navCtrl: NavController,
    public http: HttpClient,
    public navParams: NavParams,
    public router:Router,
    public alertController: AlertController) { 
      this.loaddata()

    }
    
  ngOnInit() {
  }

    loaddata(){
      let url = "http://localhost/db_ifightcovid19/loaddatausersmember.php";
      this.http.get(url)
      .subscribe(data=> {
        if(data != null){
          this.datausersmember = data;
          console.log("doneg.",data);
        }
      },error=>{
        console.log("load fial.")
    
      });
    }
    logout(item:number=2){
      let url = 'http://localhost/db_ifightcovid19/logout.php'
      let postdataset = new FormData();
      postdataset.append('send',item.toString());
      let callback:Observable<any> = this.http.post(url,postdataset);
      callback.subscribe(call =>{
        if(call.status == 200){
        }else{}});
      //   const alert = document.createElement('ion-alert');
      // alert.message = 'บันทึกรายการเสร็จสมบูรณ์';
      // alert.buttons = ['ตกลง'];
      // document.body.appendChild(alert);
      // return alert.present();
      this.gotopage()
    }
  
    gotopage(){
      this.router.navigate(['home'])
    }

}
