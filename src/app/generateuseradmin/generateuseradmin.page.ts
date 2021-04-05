// import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { NavParams} from "@ionic/angular";
import { Router} from '@angular/router'

@Component({
  selector: 'app-generateuseradmin',
  templateUrl: './generateuseradmin.page.html',
  styleUrls: ['./generateuseradmin.page.scss'],
  providers: [NavParams],
})
export class GenerateuseradminPage implements OnInit {
  insertdata:any= {};
  data:any;
  constructor(    
    public navCtrl: NavController,
    public http: HttpClient,
    public navParams: NavParams,
    public router:Router,
    public alertController: AlertController) { 
      this.data ={
        username:'',
        password:'',
        tos:false
      };
    }
    ngOnInit() {
    }

    loginaddmin(){
      let url = 'http://localhost/db_ifightcovid19/insertdataloginaddmin.php'
  
      let postdataset = new FormData();
      postdataset.append('username',this.insertdata.username);
      postdataset.append('password',this.insertdata.password);
      postdataset.append('role',this.insertdata.role);
      let callback: Observable<any> = this.http.post(url, postdataset);

    callback.subscribe(call => {
      if (call.status == 200) {
      } else { }
    });
    const alert = document.createElement('ion-alert');
    alert.message = 'ลงทะเบียนเสร็จสมบูรณ';
    alert.buttons = ['ตกลง'];
    document.body.appendChild(alert);
    return alert.present();
  };
}

  //   logout(){
  //     const alert = document.createElement('ion-alert');
  //     alert.message = 'ออกจากระบบ?';
  //     alert.buttons = [
  //       {
  //         text: 'ยกเลิก',
  //         role: 'cancel',
  //         handler: () => {
  //           console.log('Cancel clicked');
  //         }
  //       },
  //       {
  //         text: 'ใช่',
  //         handler: () => {
  //           this.clear();
            
  //         }
  //       }
        
  //     ];
  //       document.body.appendChild(alert);
  //       return alert.present()
  //   }
  //   clear(){
  //     window.sessionStorage.clear()
  //     this.gotopage()
  //   }
  //   gotopage(){
  //     this.router.navigate(['home'])
  //   }
  
  // }





  