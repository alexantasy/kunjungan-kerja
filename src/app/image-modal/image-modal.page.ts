import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavController, Platform } from '@ionic/angular';


@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.page.html',
  styleUrls: ['./image-modal.page.scss'],
})
export class ImageModalPage implements OnInit {

  @Input()
  img!: string;

  constructor(private modalController: ModalController, private navCtrl: NavController, private platform: Platform) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.handleBackButton();
    });
  }
  handleBackButton() {
    this.navCtrl.back(); 
  }


  dismissModal() {
    this.modalController.dismiss();
  }

  ngOnInit() {
  }

}
