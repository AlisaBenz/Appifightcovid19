import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { NavParams} from "@ionic/angular";
import { NgForm } from "@angular/forms";
@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.page.html',
  styleUrls: ['./loginadmin.page.scss'],
  providers: [NavParams],
})
export class LoginadminPage implements OnInit {
  insertdata:any= [];
  data:any=[];
  dataitem: any = [];
  isSubmitted: boolean;
  constructor(    
    public navCtrl: NavController,
    public http: HttpClient,
    public navParams: NavParams,
    public alertController: AlertController) { 
      
      this.data = {
        password: "",
        
        tos: false,
      };
    }
    ngOnInit() {
    }
    onSubmit(myForm: NgForm) {
      this.isSubmitted = true;
      console.log("onSubmit");
      console.log(myForm);
    }
  
    noSubmit(e) {
      e.preventDefault();
    }
    checklogin(data) {
      const alert = document.createElement("ion-alert");
      alert.message = "คุณต้องการเข้าสู่ระบบ หรือไม่?";
      alert.buttons = [
        {
          text: "ยกเลิก",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          },
        },
        {
          text: "ใช่",
          handler: () => {
            this.saveloginaddmin();
          },
        },
      ];
      document.body.appendChild(alert);
      return alert.present();
    }
    saveloginaddmin() {
      let url = "http://localhost/db_ifightcovid19/loadadmin.php";
      let postdataset = encodeURIComponent(this.insertdata.password);
      let callback: Observable<any> = this.http.get(
        url + "/?password=" + postdataset
      );
      callback.subscribe((data) => {
        if (data !== null) {
        
            window.sessionStorage.setItem("id_user", data[0].role);
            this.navCtrl.navigateRoot("/information");

        }
      });
      
    }
  }