
import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { NavParams} from "@ionic/angular";

declare var google;

interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}
// import { Platform, NavController } from "ionic-angular";
@Component({
  selector: 'app-patientmap',
  templateUrl: './patientmap.page.html',
  styleUrls: ['./patientmap.page.scss'],
  providers: [NavParams],
})
export class PatientmapPage implements OnInit {
  dataform14day:any =[];
  
  map = null;
  markers: Marker[] = [];

  // constructor() {}
  
  constructor(
    public navCtrl: NavController,
    public http: HttpClient,
    public navParams: NavParams,
    public alertController: AlertController) { 
    }

  ngOnInit() {
    this.loadMap();
  }
  
  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create LatLng object
    const myLatLng = {lat: 15.1228894, lng: 104.906611};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 15
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      this.renderMarkers();
      mapEle.classList.add('show-map');
    });
  }

  renderMarkers() {
    let url = "http://localhost/db_ifightcovid19/loaddataform14day.php";
      this.http.get(url)
      .subscribe(data=> {
        if(data != null){
          this.dataform14day = data;
          this.dataform14day.forEach(marker => {
            if (marker.status === 'ปกติ') {
              this.addMarker(marker);
            }else{
              this.addMarkerWarning(marker);
            }
          });
        }
      },error=>{
        console.log("load fial.")
      });
      for (let index = 0; index < this.dataform14day.length; index++) {
        console.log(this.dataform14day[index]);
      }
  }

  addMarker(marker) {
    return new google.maps.Marker({
      position: {lat: parseFloat(marker.lat), lng: parseFloat(marker.lag)},
      map: this.map,
      title: 'test',
      icon:  'assets/greenmarker.png'
    });
  }
  addMarkerWarning(marker) {
    return new google.maps.Marker({
      position: {lat: parseFloat(marker.lat), lng: parseFloat(marker.lag)},
      map: this.map,
      title: 'test'
    });
  }

}


