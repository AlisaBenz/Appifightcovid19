import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { NavParams} from "@ionic/angular";
import { ActivatedRoute, Router} from '@angular/router'
@Component({
  selector: 'app-from14daytable',
  templateUrl: './from14daytable.page.html',
  styleUrls: ['./from14daytable.page.scss'],
  providers: [NavParams],
})
export class From14daytablePage implements OnInit {
  dataform14day:any =[];
  user_id:any;
  statususer:any=[];
  id: any;
  // user_data={
  //   updatestatus:'',
  // };
  constructor(
    public navCtrl: NavController,
    public http: HttpClient,
    public navParams: NavParams,
    public router:Router,
    public alertController: AlertController,
    private route: ActivatedRoute) { 
      this.loaddata()
      this.loaddata1()

    }
    
  ngOnInit() {
  }
    loaddata(){
      this.user_id = sessionStorage.getItem('user_id')
      let url = "http://localhost/db_ifightcovid19/loaddataform14day.php";
      this.http.get(url + "/?id=" + this.user_id)
      .subscribe(data=> {
        if(data != null){
          this.dataform14day = data;
          console.log("done.",data);
        }
      },error=>{
        console.log("load fial.")
    
      });
    }
    loaddata1(){ //อัพเดทข้อมูลสถานะผู้ป่วยย
      this.user_id = sessionStorage.getItem('user_id')
      let url = "http://localhost/db_ifightcovid19/loadstatususer.php";
      this.http.get(url + "/?id=" + this.user_id)
      // this.http.get(url)
      .subscribe(data=> {
        if(data != null){
          this.statususer = data;
          console.log("done.",data);
        }
      },error=>{
        console.log("load fial.")
    
      });
    }


    loaddatadelect(){ ///ลบข้อมูลออกจากฐานข้อมูลทุก15วัน
      this.user_id = sessionStorage.getItem('user_id')
      let url = "http://localhost/db_ifightcovid19/loaddelectform.php";
      this.http.get(url + "/?id=" + this.user_id)
      // this.http.get(url)
      .subscribe(data=> {
        if(data != null){
          this.dataform14day = data;
          console.log("done.",data);
        }
      },error=>{
        console.log("load fial.")
    
      });
    }
  
}
