import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageModalPage } from '../image-modal/image-modal.page';
import { NavController, Platform } from '@ionic/angular';



@Component({
  selector: 'app-detail-kunjungan',
  templateUrl: './detail-kunjungan.page.html',
  styleUrls: ['./detail-kunjungan.page.scss'],
})
export class DetailKunjunganPage implements OnInit {

  images = ['img12.jpg', 'img12.jpg', 'img12.jpg', 'img12.jpg'];

  constructor(private modalController: ModalController, private navCtrl: NavController, private platform: Platform) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.handleBackButton();
    });
  }
  handleBackButton() {
    this.navCtrl.back(); 
  }

  async openImage(image: string) {
    const modal = await this.modalController.create({
      component: ImageModalPage,
      componentProps: {
        img: image
      }
    });
    return await modal.present();
  }

  ngOnInit() {
  }

}
