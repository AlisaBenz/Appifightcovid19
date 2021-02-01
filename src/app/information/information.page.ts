import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  NavController,
  NavParams,
  AlertController,
} from "@ionic/angular";
declare var google;

@Component({
  selector: 'app-information',
  templateUrl: './information.page.html',
  styleUrls: ['./information.page.scss'],
  providers: [NavParams],
})
export class InformationPage implements OnInit {

  saveData:any = [];
  screeningquestion : any =[];
  constructor( public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    public alertCtrl: AlertController) { 
      this.loaddata();
      
    
    }

    showChart(){
      let count1 = this.screeningquestion[0].count1 ;
      let count2 = this.screeningquestion[1].count2 ;
      let count3 = this.screeningquestion[2].count3 ;
      let count4 = this.screeningquestion[3].count4 ;
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Topping');
      data.addColumn('number', 'Slices');
      data.addRows([
        ['ปกติ', Number(count1)],
        ['ปากกลาง',Number(count2)],
        ['เสี่ยง', Number(count3)],
        ['เสี่ยงมาก', Number(count4)]

  
        
      
      ]);
      var options = {'title':'รายงานภาพรวมข้อมูลผู้ป่วย',
                     'width':400,
                     'height':300};
      var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    };
    loaddata(){
      let url = "http://localhost/db_ifightcovid19/loaddatagarph.php";
      this.http.get(url)
      .subscribe(data=> {
        if(data != null){
          this.screeningquestion = data;
          
        }
      },error=>{
        console.log("load fial.")
    
      });
      
    }
  ngOnInit() {
  }
}