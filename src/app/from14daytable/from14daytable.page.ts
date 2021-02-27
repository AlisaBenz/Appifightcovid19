import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { NavParams} from "@ionic/angular";
@Component({
  selector: 'app-from14daytable',
  templateUrl: './from14daytable.page.html',
  styleUrls: ['./from14daytable.page.scss'],
  providers: [NavParams],
})
export class From14daytablePage implements OnInit {
  dataform14day:any =[];
  constructor(
    public navCtrl: NavController,
    public http: HttpClient,
    public navParams: NavParams,
    public alertController: AlertController) { 
      this.loaddata()

    }
    
  ngOnInit() {
  }

    loaddata(){
      let url = "http://localhost/db_ifightcovid19/loaddataform14day.php";
      this.http.get(url)
      .subscribe(data=> {
        if(data != null){
          this.dataform14day = data;
          console.log("done.",data);
        }
      },error=>{
        console.log("load fial.")
    
      });
    }


//  Delectdata(id=number){
//  let url = "http://localhost/db_ifightcovid19/delectform14day.php";
//          let postdata =  new FormData()
//          this.http.post(url)
       
//        .subscribe(data=> {
//          if(data != null){
//            this.dataform14day = data;
//            console.log("done.",data);
//          }
//        },error=>{
//          console.log("load fial.")
    
//       });
//     }
 
 

}
