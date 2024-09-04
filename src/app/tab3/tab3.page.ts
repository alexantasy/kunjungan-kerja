import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private router: Router, private alertController: AlertController) {}

  // konfirasi logout
  async presentLogoutConfirm() {
    const alert = await this.alertController.create({
      header: 'Konfirmasi Keluar',
      message: 'Apakah Anda yakin ingin keluar?',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Pengguna membatalkan keluar.');
          }
        }, 
        {
          text: 'Keluar',
          handler: () => {
            this.logout(); 
          }
        }
      ]
    });

    await alert.present();
  }
  // fungsi logout
  logout() {
    localStorage.removeItem('nik'); 
    this.router.navigate(['/login']);
    console.log('Pengguna telah keluar dan diarahkan ke halaman login.');
  }
}
