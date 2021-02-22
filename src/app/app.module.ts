import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleMaps } from '@ionic-native/google-maps';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AppAvailability } from '@ionic-native/app-availability/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [HttpClientModule,BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    AppAvailability,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    GoogleMaps,
    NativeGeocoder,
    Geolocation
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
