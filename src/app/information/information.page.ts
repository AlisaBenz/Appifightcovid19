import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  NavController,
  NavParams,
  AlertController,
} from "@ionic/angular";

// import API from "../../environments/environment.prod";
import { Router } from '@angular/router';
declare var google;

@Component({
  selector: 'app-information',
  templateUrl: './information.page.html',
  styleUrls: ['./information.page.scss'],
  providers: [NavParams],
})
export class InformationPage implements OnInit {
  // api: string = 'https://concertante-expirat.000webhostapp.com/';
  count1:any=[];
  count2:any=[];
  count3:any=[];
  count4:any=[];
  patientnow: any =[];
  saveData2:any = [];
  saveData:any = [];
  screeningquestion : any =[];
  constructor( public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    public router:Router,
    public alertCtrl: AlertController) { 
      this.loaddata();
      this.loaddatacount1();
      this.loaddatacount2();
      this.loaddatacount3();
      this.loaddatacount4();
      this.Spatientnow();
      

    }
    ngOnInit() {
    }
    showChart(){
      let count1x = this.screeningquestion[0].count1 ;
      let count2x = this.screeningquestion[1].count2 ;
      let count3x = this.screeningquestion[2].count3 ;
      let count4x = this.screeningquestion[3].count4 ;
      this.saveData2 = [{count:count1x}];
      console.log(this.saveData2);
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Topping');
      data.addColumn('number', 'Slices');
      data.addRows([
        ['ปกติ', Number(count1x)],
        ['ปากกลาง',Number(count2x)],
        ['เสี่ยง', Number(count3x)],
        ['เสี่ยงมาก', Number(count4x)]

  
        
      
      ]);
      var options = {'title':'สรุปรายงานภาพรวมข้อมูลผู้ป่วย',
                     'width':400,
                     'height':300};
      var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    };
    loaddata(){
      let url = "http://localhost/db_ifightcovid19/loaddatagarph.php";
      // let url = this.api + "loaddatagarph.php";
      this.http.get(url)
      .subscribe(data=> {
        if(data != null){
          this.screeningquestion = data;
        }
      },error=>{
        console.log("load fial.")
    
      });
     
    }

    loaddatacount1(){
      // let url =  this.api + "loaddatacount1.php";
      let url = "http://localhost/db_ifightcovid19/loaddatacount1.php";
      this.http.get(url)
      .subscribe(data=> {
        if(data != null){
          this.count1 = data;}},error=>{console.log("load fial.")});
        }
        loaddatacount2(){
          let url = "http://localhost/db_ifightcovid19/loaddatacount2.php";
          // let url = "https://concertante-expirat.000webhostapp.com/loaddatacount2.php";
          this.http.get(url)
          .subscribe(data=> {
            if(data != null){
              this.count2 = data;}},error=>{console.log("load fial.")});
            }
            loaddatacount3(){
              let url = "http://localhost/db_ifightcovid19/loaddatacount3.php";
              this.http.get(url)
              .subscribe(data=> {
                if(data != null){
                  this.count3 = data;}},error=>{console.log("load fial.")});
                }
    
                loaddatacount4(){
                  let url = "http://localhost/db_ifightcovid19/loaddatacount4.php";
                  this.http.get(url)
                  .subscribe(data=> {
                    if(data != null){
                      this.count4 = data;}},error=>{console.log("load fial.")});
                    }
                    Spatientnow(){
                      let url = "http://localhost/db_ifightcovid19/loaddatapatientday.php";
                      this.http.get(url)
                      .subscribe(data=> {
                        if(data != null){
                          this.patientnow = data;}},error=>{console.log("load fial.")});
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