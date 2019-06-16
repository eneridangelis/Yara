import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class Login {

  constructor(private navCtrl: NavController) {}

  // login() {
  // 	 	this.navCtrl.navigateRoot('feed');
  // 	}

  feed() {
  		this.navCtrl.navigateRoot('feed');
  }

}
