import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NavController } from "@ionic/angular";
import { Observable } from "rxjs";
import { AlertController } from "@ionic/angular";
import { NavParams } from "@ionic/angular";
import { NgForm } from "@angular/forms";
// import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: "app-loginpatient",
  templateUrl: "./loginpatient.page.html",
  styleUrls: ["./loginpatient.page.scss"],
  providers: [NavParams],
})
export class LoginpatientPage implements OnInit {
  data: any;
  dataitem: any = [];
  isSubmitted = false;
  insertdata: any = [];
  constructor(
    public navCtrl: NavController,
    public http: HttpClient,
    public navParams: NavParams,
    public alertController: AlertController
  ) {
    this.data = {
      personid: "",
      tos: false,
    };
  }
  ngOnInit() {}
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
    alert.message = "คุณต้องเข้าสู่ระบบ หรือไม่?";
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
          this.saveloginpatient();
        },
      },
    ];
    document.body.appendChild(alert);
    return alert.present();
  }

  saveloginpatient() {
    let url = "http://localhost/db_ifightcovid19/insertdataloginpatient.php";
    let postdataset = encodeURIComponent(this.insertdata.personid);

    let callback: Observable<any> = this.http.get(
      url + "/?person_id=" + postdataset
    );
    callback.subscribe((data) => {
      if (data !== null) {
        // if( data[0].role=== "ผู้ป่วย"){
          window.sessionStorage.setItem("user_id", data[0].id);
          this.navCtrl.navigateRoot("/checkuser");
        // } else{
        // ? เป็นหมอ
        // }
      }
    });
    //   const alert = document.createElement('ion-alert');
    // alert.message = 'บันทึกรายการเสร็จสมบูรณ์';
    // alert.buttons = ['ตกลง'];
    // document.body.appendChild(alert);
    // return alert.present();
    // this.checklogin()
  }
  // ngOnInit() {
  // }
}
