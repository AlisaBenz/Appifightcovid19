
import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { NavParams} from "@ionic/angular";
import { GoogleMapsEvent } from '@ionic-native/google-maps';

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
  // user_id:any;
  // Infowindow: any

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
    const myLatLng = {lat: 15.1898441, lng: 104.8578303};
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
    // this.user_id = sessionStorage.getItem('user_id')
    let url = "http://localhost/db_ifightcovid19/loadlocationmarker.php";
    // this.http.get(url + "/?id=" + this.user_id)
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
      title: 'ผู้ป่วยปกติ',
      icon:  'assets/greenmarker.png'
      
    });
  }
  
  addMarkerWarning(marker) {
    return new google.maps.Marker({
      position: {lat: parseFloat(marker.lat), lng: parseFloat(marker.lag)},
      map: this.map,
      title: 'ผู้ป่วยเสี่ยง'
    });
  }
}


