// import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core'; 
import { Router } from '@angular/router';
 import { AlertController } from '@ionic/angular'; 

@Component({
  selector: 'app-description',
  templateUrl: './description.page.html',
  styleUrls: ['./description.page.scss'],
})
export class DescriptionPage  {
 constructor(private router: Router, private alertController: AlertController) {}
    
 onAgreeClick() {
   this.router.navigate(['/healthform']);
 }

 onDeclineClick() {
   this.presentAlertConfirm();
 }

 async presentAlertConfirm() {
   const alert = await this.alertController.create({
     message: 'กรุณากดยอมรับเพื่อเข้าใช้งาน',
     buttons: [
       {
         text: 'ยอมรับ',
         cssClass: 'primary',
         handler: () => {
           this.onAgreeClick();
         },
       },
       {
         text: 'ปฎิเสธ',
         role: 'cancel',
         cssClass: 'secondry',
       },
     ],
   });
   await alert.present();
 }
}




