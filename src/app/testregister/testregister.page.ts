// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-testregister',
//   templateUrl: './testregister.page.html',
//   styleUrls: ['./testregister.page.scss'],
// })
// export class TestregisterPage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-testregister',
  templateUrl: './testregister.page.html',
  styleUrls: ['./testregister.page.scss'],
})
export class TestregisterPage {
  data: any;
  isSubmitted = false;

  constructor() {
    this.data = {
      name: '',
      email: '',
      comment: '',
      tos: false
    };
  }

  onSubmit(myForm: NgForm) {
    this.isSubmitted = true;
    console.log('onSubmit');
    console.log(myForm);
  }

  noSubmit(e) {
    e.preventDefault();
  }
}