import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-lapor-kegiatan',
  templateUrl: './lapor-kegiatan.page.html',
  styleUrls: ['./lapor-kegiatan.page.scss'],
})
export class LaporKegiatanPage {
  files: any[] = [];
  isModalOpen = false;
  thisModalOpen = false;

  constructor(private navCtrl: NavController,private platform: Platform) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.handleBackButton();
    });
  }
  handleBackButton() {
    this.navCtrl.back(); 
  }


  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.files.push(file);
    }
  }

  removeFile(file: any) {
    this.files = this.files.filter((f) => f !== file);
  }

  openSavePopup() {
    this.isModalOpen = true;
  }

  closeSavePopup() {
    this.isModalOpen = false;
  }

  saveReport() {
    console.log('Report saved');
    this.closeSavePopup(); 
    this.thisModalOpen = true;
  }

  closeSaveReport() {
    this.thisModalOpen = false; 
  }

  cancelSave() {
    this.closeSavePopup();
  }

  goToTab2() {
    this.navCtrl.navigateRoot('/tabs/tab2');
  }
}
