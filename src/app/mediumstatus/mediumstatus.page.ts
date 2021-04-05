import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  NavController,
  NavParams,
  AlertController,
} from "@ionic/angular";
declare var google;
import { NavigationExtras } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-mediumstatus',
  templateUrl: './mediumstatus.page.html',
  styleUrls: ['./mediumstatus.page.scss'],
  providers: [NavParams],
})
export class MediumstatusPage implements OnInit {
 mediumstatus:any =[];
  user_data: any = [];
  user_id: any;
  constructor(
    public navCtrl: NavController,
    public http: HttpClient,
    public navParams: NavParams,
    public router: Router,
    public alertController: AlertController) {
    this.loaddata()

  }

  loaddata() {
    let url = "http://localhost/db_ifightcovid19/loaddatapatientmediumstatus.php";
    let url2 = "http://localhost/db_ifightcovid19/load1.php";
    // let url3 = "http://localhost/db_ifightcovid19/loadhealthform.php";

    // this.user_id = sessionStorage.getItem('user_id') 
    // this.http.get(url + "/?id=" + this.user_id)
    this.http.get(url)
      .subscribe(data => {
        if (data != null) {
          this.mediumstatus = data;
          for (let index = 0; index < this.mediumstatus.length; index++) {
            this.http.get(url2 + "/?id=" + this.mediumstatus[index].user_id).subscribe(datauser => {
              this.user_data.push(datauser)
            
            })
          }
        }
      }, error => {
        console.log("load fial.")

      });
  }

  ngOnInit() {
  }

  routeTo(id) {
    this.router.navigate(['/namemediumstatus', id])
  }
 
}





//   mediumstatus:any =[];
//   constructor(
//     public navCtrl: NavController,
//     public http: HttpClient,
//     public navParams: NavParams,
//     public alertController: AlertController) { 
//       this.loaddata()

//     }

//     loaddata(){
//       let url = " http://localhost/db_ifightcovid19/loaddatapatientmediumstatus.php";
//       this.http.get(url)
//       .subscribe(data=> {
//         if(data != null){
//           this.mediumstatus = data;
//           console.log("done.",data);
//         }
//       },error=>{
//         console.log("load fial.")
    
//       });
//     }
//   ngOnInit() {
//   }

// }

