// import { Component, OnInit } from '@angular/core';
// import { NavController , AlertController, Platform} from '@ionic/angular';
// import { LocalNotifications }from '@ionic-native/local-notifications';
// import { title } from 'process';

// @Component({
//   selector: 'app-notification',
//   templateUrl: './notification.page.html',
//   styleUrls: ['./notification.page.scss'],
// })
// export class NotificationPage implements OnInit {

//   constructor(
//     public navCtrl: NavController,
//     private localNotifications: LocalNotifications
//   ) { }
//   scheduleNotification(){
//     this.localNotifications.schedule({
//     id:1,
//     title: 'Attention',
//     text: 'Simons Notification',
//     at: new Data(new Data().getTime()+5 *1000),
//     data:{ mydate: ''}
//     });

//   }

//   ngOnInit() {
//   }

// }
// import { Component } from '@angular/core';
// import { NavController , AlertController, Platform} from '@ionic/angular';

// import {
//      LocalNotifications } from '@ionic-native/local-notifications';

// @Component({
//    selector: 'app-notification',
//    templateUrl: './notification.page.html',
//    styleUrls: ['./notification.page.scss'],
// })
// export class NotificationPage  {

//   constructor(
//       public navCtrl: NavController,
//       private localNotifications: LocalNotifications) { }

//   single_notification() {
//     // Schedule a single notification
//     this.localNotifications.schedule({
//       id: 1,
//       text: 'Single ILocalNotification',
//       sound: 'file://sound.mp3',
//       data: { secret: 'key_data' }
//     });
//   }


//   multi_notification() {
//     // Schedule multiple notifications
//     this.localNotifications.schedule([{
//       id: 1,
//       text: 'Multi ILocalNotification 1',
//       sound: 'file://sound.mp3',
//       data: { secret: 'key_data' }
//     }, {
//       id: 2,
//       title: 'Local ILocalNotification Example',
//       text: 'Multi ILocalNotification 2',
//       icon: 'http://example.com/icon.png'
//     }]);
//   }



//   delayed_notification() {
//     // Schedule delayed notification
//     this.localNotifications.schedule({
//       text: 'Delayed ILocalNotification',
//       trigger: { at: new Date(new Date().getTime() + 3600) },
//       led: 'FF0000',
//       sound: null
//     });
//   }


// }
