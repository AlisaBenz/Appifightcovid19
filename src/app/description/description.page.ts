// import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core'; 
 import { AlertController } from '@ionic/angular'; 

@Component({
  selector: 'app-description',
  templateUrl: './description.page.html',
  styleUrls: ['./description.page.scss'],
})
export class DescriptionPage  {
  // navCtrl: any;
  // router: any;
  constructor(public alertCtrl: AlertController) { } 
  async showConfirm() { 
  const confirm = await this.alertCtrl.create({ 
  header: 'Confirmation', 
  message: 'กรุณายืนยัน', 
  buttons: [
  { 
  text: 'ยอมรับ' ,
  role: 'Ok ', 
  handler: () => { 
    
  console.log('Confirm Ok' ); 
  } 
  }, 
  { 
  text: 'ปฎิเสธ', 
  role: 'Cancel',
  handler: () => { 
    // this.router.navigate(['welcome']);
    // this.navCtrl.navigateRoot('/healtform');
  console.log('Confirm Cancel.');  
  } 
  } 
  ] 
  }); 
  await confirm.present(); 
  } 
 }  