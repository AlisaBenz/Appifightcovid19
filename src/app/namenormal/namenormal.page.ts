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

import { HTTP } from '@ionic-native/http/ngx'


// import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-namenormal',
  templateUrl: './namenormal.page.html',
  styleUrls: ['./namenormal.page.scss'],
  providers: [NavParams],
})
export class NamenormalPage implements OnInit {
  // load2:any=[];
  user_id:any;
  insertdata:any=[];
  namenormal: any = [];
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
    disease :'',
    historyofillness :'',
    status:''
  };
  constructor(
    public navCtrl: NavController,
    public http: HttpClient,
    public navParams: NavParams,
    public router: Router,
    public alertController: AlertController,
    private route: ActivatedRoute,
  ) {
    // this.loaddata()
  }

  ngOnInit() {
    let url = "http://localhost/db_ifightcovid19/load1.php";
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.http.get(url + "/?id=" + this.id).subscribe(datauser => {
      console.log(datauser);
      this.user_data.name = datauser[0].name;
      this.user_data.lastname = datauser[0].lastname;
      this.user_data.personid = datauser[0].personid;
      this.user_data.date_brithday = datauser[0].date_brithday;
      this.user_data.address = datauser[0].address;
      this.user_data.district = datauser[0].district;
      this.user_data.sub_district = datauser[0].sub_district;
      this.user_data.provine = datauser[0].provine;   
      this.user_data.phone = datauser[0].phone;  
    });
    
    let url_2 = 'http://localhost/db_ifightcovid19/loadhealthform.php';
    this.http.get(url_2 +'/?id=' +this.id).subscribe(healp =>{
      // console.log(healp[0]);
      this.user_data.disease = healp[0].disease;
      this.user_data.historyofillness = healp[0].historyofillness;
    });
    
    let url_3 = 'http://localhost/db_ifightcovid19/loaddataform14day.php  ';
    this.http.get(url_3 +'/?id=' +this.id).subscribe((form14) =>{
      console.log(form14);
      // console.log(Object.keys(form14).length);
      const index = Object.keys(form14).length; 
      console.log(index);
      const form14day = form14[index-1];
      this.user_data.status = form14day.status;
      console.log(this.user_data.status);
    });

  };
  
  saveupdatestatus(){
    const header = 'Content-Type';
    let url = 'http://localhost/db_ifightcovid19/updatestatus.php'
   
    let headers = new Headers();
      headers.append('Access-Control-Allow-Origin', '*');
      headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
      headers.append('Accept', 'application/json');
      headers.append('content-type', 'application/json');

    let postdataset = new FormData();
    postdataset.append('updatestatus',this.insertdata.updatestatus);
    
    postdataset.append('id',this.id);
    const id= this.id;
    const updatestatus = this.updatestatus;

    this.http.post(url+'/'+id,postdataset ).subscribe(result =>{
      console.log(result);
    })
    const alert = document.createElement('ion-alert');
    alert.message = 'อัพเดทข้อมูลเรียบร้อยแล้ว';
    alert.buttons = ['ตกลง'];
    document.body.appendChild(alert);
    return alert.present();

   
  }
}
