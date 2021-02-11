
import { Component, NgZone, OnInit } from '@angular/core';

// import { Platform } from 'ionic-angular';

// // import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
// declare var ApiAIPromises: any;



@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.page.html',
  styleUrls: ['./chatbot.page.scss'],

})
export class ChatbotPage implements OnInit{
  answers = [];

  // constructor(public platform: Platform, public ngZone: NgZone) {
  //   platform.ready().then(() => {
  //     ApiAIPromises.init({
  //       clientAccessToken: "996215250fd4438db3ff5cf9d5957c3e"
  //     }).then(result => console.log(result));
  //   });
  // }
  ngOnInit() {
  }

  // ask(question) {
  //   ApiAIPromises.requestText({
  //     query: question
  //   })
  //     .then(({ result: { fulfillment: { speech } } }) => {
  //       this.ngZone.run(() => {
  //         this.answers.push(speech);
  //       });
  //     })
  // }
}

