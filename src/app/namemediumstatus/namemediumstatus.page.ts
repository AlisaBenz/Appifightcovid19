import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  NavController,
  NavParams,
  AlertController,
} from "@ionic/angular";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
declare var google;

@Component({
  selector: 'app-namemediumstatus',
  templateUrl: './namemediumstatus.page.html',
  styleUrls: ['./namemediumstatus.page.scss'],
  providers: [NavParams],
})
export class NamemediumstatusPage implements OnInit {

  namemediumstatus:any =[];
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
      // this.user_data.status = datauser[0].status;  
     

    })

    // let url2 = "http://localhost/db_ifightcovid19/loadhealthform.php";
    // this.route.params.subscribe(params => {
    //   this.id = params['id'];
    // });
    // this.http.get(url2 + "/?id=" + this.id).subscribe(datauser => {
    //   this.user_data.disease = datauser[0].disease;
    //   this.user_data.historyofillness = datauser[0].historyofillness;
     

    // })
  }
  }
  

