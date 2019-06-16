import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-match',
  templateUrl: 'match.page.html',
  styleUrls: ['match.page.scss'],
})
export class Match {

  constructor(private navCtrl: NavController) {}

  match() {
  	 	this.navCtrl.navigateRoot('match');
  	}

}
