import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  NavController,
  NavParams,
  AlertController,
} from "@ionic/angular";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
declare var google;


@Component({
  selector: 'app-nameveryriskstatus',
  templateUrl: './nameveryriskstatus.page.html',
  styleUrls: ['./nameveryriskstatus.page.scss'],
  providers: [NavParams],
})
export class NameveryriskstatusPage implements OnInit {
  insertdata:any=[];
  nameveryriskstatus: any = [];
  updatestatus: string;
  id: any;
  user_data={
    name:'',
    lastname:'',
    personid:'',
    date_brithday:'',
    address:'',
    district:'',
    sub_district:'',
    provine:'',
    phone:'',
    disease:'',
    historyofillness:'',
    status:''
    // status:''
  };
  constructor(
    public navCtrl: NavController,
    public http: HttpClient,
    public navParams: NavParams,
    public router: Router,
    public alertController: AlertController,
    private route: ActivatedRoute
  ) {
    // this.loaddata()

  }

  // loaddata() {
  //   let url = "http://localhost/db_ifightcovid19/loaddatanamenormal.php";
  //   this.http.get(url)
  //     .subscribe(data => {
  //       if (data != null) {
  //         this.namenormal = data;
  //         console.log("done.", data);
  //       }
  //     }, error => {
  //       console.log("load fial.")

  //     });
  // }
  ngOnInit() {
    let url = "http://localhost/db_ifightcovid19/load1.php";
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.http.get(url + "/?id=" + this.id).subscribe(datauser => {
      this.user_data.name = datauser[0].name;
      this.user_data.lastname = datauser[0].lastname;
      this.user_data.personid = datauser[0].personid;
      this.user_data.date_brithday = datauser[0].date_brithday;
      this.user_data.address = datauser[0].address;
      this.user_data.district = datauser[0].district;
      this.user_data.sub_district = datauser[0].sub_district;
      this.user_data.provine = datauser[0].provine;   
      this.user_data.phone = datauser[0].phone;     
      this.user_data.disease = datauser[0].disease;   
      this.user_data.historyofillness = datauser[0].historyofillness;     
      this.user_data.status = datauser[0].status;
     

    })
  };
 
  saveupdatestatus(){
    const header = 'Content-Type';
    let url = 'http://localhost/db_ifightcovid19/updatestatus.php'
    //  this.http.get(url + "/?id=" + this.user_id)
    let headers = new Headers();
      headers.append('Access-Control-Allow-Origin', '*');
      headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
      headers.append('Accept', 'application/json');
      headers.append('content-type', 'application/json');

    let postdataset = new FormData();
    postdataset.append('updatestatus',this.insertdata.updatestatus);
    // postdataset.append('id',this.user_id);
    postdataset.append('id',this.id);
    const id= this.id;
    const updatestatus = this.updatestatus;

    this.http.post(url+'/'+id,postdataset ).subscribe(result =>{
      console.log(result);
    })
    const alert = document.createElement('ion-alert');
    alert.message = 'บันทึกรายการเสร็จสมบูรณ์';
    alert.buttons = ['ตกลง'];
    document.body.appendChild(alert);
    return alert.present();


   
  }
}
