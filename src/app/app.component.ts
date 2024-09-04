import { Component } from '@angular/core';
import { Platform, ToastController, NavController } from '@ionic/angular';
import { App } from '@capacitor/app'; 

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  lastTimeBackPress = 0;
  timePeriodToExit = 2000;
  swipeCount = 0;
  swipeThreshold = 2;
  lastSwipeTime = 0;
  swipeTimeout = 2000;

  constructor(
    private platform: Platform,
    private toastController: ToastController,
    private navController: NavController 
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.handleBackButton();
      this.handleSwipe();
    });
  }

  handleBackButton() {
    this.platform.backButton.subscribeWithPriority(10, async () => {
      const currentTime = new Date().getTime();

      if (currentTime - this.lastTimeBackPress < this.timePeriodToExit) {
        App.exitApp();
      } else {
        this.lastTimeBackPress = currentTime;
        const toast = await this.toastController.create({
          message: 'Tekan kembali sekali lagi untuk keluar aplikasi',
          duration: 2000,
          position: 'bottom',
        });
        toast.present();
      }
    });
  }

  handleSwipe() {
    let touchStartX = 0;

    document.addEventListener('touchstart', (event: TouchEvent) => {
      touchStartX = event.touches[0].clientX;
    });

    document.addEventListener('touchmove', (event: TouchEvent) => {
      const touchEndX = event.touches[0].clientX;

      if (touchStartX - touchEndX > 75) { // Mengatur threshold untuk mendeteksi geseran ke kiri
        this.detectSwipe();
      }
    });
  }

  async detectSwipe() {
    const currentTime = new Date().getTime();

    if (currentTime - this.lastSwipeTime < this.swipeTimeout) {
      this.swipeCount++;
    } else {
      this.swipeCount = 1;
    }

    this.lastSwipeTime = currentTime;

    if (this.swipeCount === 1) {
      this.navController.back(); 
    } else if (this.swipeCount >= this.swipeThreshold) {
      App.exitApp();
    } else {
      const toast = await this.toastController.create({
        message: 'Geser sekali lagi untuk keluar aplikasi',
        duration: 2000,
        position: 'bottom',
      });
      toast.present();
    }
  }
}
