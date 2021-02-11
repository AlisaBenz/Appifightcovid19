
import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

declare var google: any;
// import { Platform, NavController } from "ionic-angular";
@Component({
  selector: 'app-patientmap',
  templateUrl: './patientmap.page.html',
  styleUrls: ['./patientmap.page.scss'],
})
export class PatientmapPage implements OnInit {
  map: any;
  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;
  constructor() { }
  ionViewDidEnter(){
    this.showMap();
  }
  showMap(){
    const location = new google.maps.LatLng(15.117235, 104.902851);
    const options = {
      center: location,
      zoom: 15,
      disableDefaultUI: true
    };
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
  }

  



  ngOnInit() {
  }

}


