import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { NavParams} from "@ionic/angular";
import { Router} from '@angular/router'
@Component({
  selector: 'app-screeningresult',
  templateUrl: './screeningresult.page.html',
  styleUrls: ['./screeningresult.page.scss'],
  providers: [NavParams],
})
export class ScreeningresultPage implements OnInit {
  datascreening:any =[];
  user_id:any;
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
      this.user_id = sessionStorage.getItem('user_id')
      let url = "http://localhost/db_ifightcovid19/loaddatascreening.php";
      this.http.get(url + "/?id=" + this.user_id)
      .subscribe(data=> {
        if(data != null){
          this.datascreening = data;
          console.log("done.",data);
        }
      },error=>{
        console.log("load fial.")
    
      });
    }
    logout(){
      const alert = document.createElement('ion-alert');
      alert.message = 'ออกจากระบบ?';
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
          handler: () => {
            this.cleartoken();
            
          }
        }
        
      ];
        document.body.appendChild(alert);
        return alert.present()
    }
    cleartoken(){
      window.sessionStorage.clear()
      this.gotopage()
    }
    gotopage(){
      this.router.navigate(['home'])
    }
  
  
}
