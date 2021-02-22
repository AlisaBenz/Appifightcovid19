import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { NavParams} from "@ionic/angular";
import { NgForm } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-loginpatient',
  templateUrl: './loginpatient.page.html',
  styleUrls: ['./loginpatient.page.scss'],
  providers: [NavParams],
})
export class LoginpatientPage implements OnInit {
  data: any;
  isSubmitted = false;
  insertdata:any= [];
  constructor(    
    public navCtrl: NavController,
    public http: HttpClient,
    public navParams: NavParams,
    public alertController: AlertController) { 
      this.data = {
        personid: '',
        // email: '',
        // comment: '',
        tos: false
      };
    }
    ngOnInit() {
    }
    onSubmit(myForm: NgForm) {
      this.isSubmitted = true;
      console.log('onSubmit');
      console.log(myForm);
    }
  
    noSubmit(e) {
      e.preventDefault();
    }

    saveloginpatient(){
      let url = 'http://localhost/db_ifightcovid19/insertdataloginpatient.php'
      let postdataset = new FormData();

      postdataset.append('personid',this.insertdata.personid);
      let callback:Observable<any> = this.http.post(url,postdataset);
      callback.subscribe(call =>{
        if(call.status == 200){
        }else{}});
      //   const alert = document.createElement('ion-alert');
      // alert.message = 'บันทึกรายการเสร็จสมบูรณ์';
      // alert.buttons = ['ตกลง'];
      // document.body.appendChild(alert);
      // return alert.present();
    }
    // ngOnInit() {
    // }
  
  }
  
  //     let postdataset = new FormData();
     
  //     postdataset.append('personid',this.insertdata.personid);
    

  //       let callback:Observable<any> = this.http.post(url,postdataset);
  //       callback.subscribe(call =>{
  //         if(call.status == 200){
  //         }else{}});
  //       // console.log('this is calback :',call);
  //       // console.log(call[0]['personid']);
  //       // console.log(this.insertdata.personid);
  //       // console.log(call.error.message);
  //       // if(this.insertdata.personid == call[0]['personid']){
  //       //   const alert = document.createElement('ion-alert');
  //       //   alert.message = 'Login successful';
  //       //   alert.buttons = ['ตกลง'];
  //       //   document.body.appendChild(alert);
  //       //   this.router.navigate(['/description']);
  //       //   return alert.present();
  //       // }else if (call.status == 404){
  //       //   const alert = document.createElement('ion-alert');
  //       //   alert.message = 'Invalid password';
  //       //   alert.buttons = ['ตกลง'];
  //       //   document.body.appendChild(alert);
  //       //   return alert.present();
  //       // }
    
     
  //   }
  //   ngOnInit() {
  //   }
  
  // }