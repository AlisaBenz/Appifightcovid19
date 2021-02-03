import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
declare var google; 

import {
GoogleMaps,
GoogleMap,
GoogleMapsEvent,
LatLng,
MarkerOptions,
Marker,
GoogleMapOptions
} from "@ionic-native/google-maps";
// import { Platform, NavController } from "ionic-angular";
@Component({
  selector: 'app-patientmap',
  templateUrl: './patientmap.page.html',
  styleUrls: ['./patientmap.page.scss'],
})
export class PatientmapPage implements OnInit {
  map;
  @ViewChild('mapElement') mapElement;
  constructor() {
  }

  ngOnInit(){
    
  }
  

  // ngAfterContentInit(): void {
  //   this.map = new google.maps.Map(
  //       this.mapElement.nativeElement,
  //       {
  //         center: {lat: -34.397, lng: 150.644},
  //         zoom: 8
  //       });
  // }
} 


