import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
})
export class GeolocationPage implements OnInit {
  latitude: any = 0; //latitude
  longitude: any = 0; //longitude
  constructor(
    private geolocation: Geolocation
  ) {}
  options = {
    timeout: 10000, 
    enableHighAccuracy: true, 
    maximumAge: 3600
  };
  ngOnInit() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      console.log(this.latitude,this.longitude);
      
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  
  }
  getCurrentCoordinates() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      console.log(this.latitude,this.longitude);
      
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }
}
