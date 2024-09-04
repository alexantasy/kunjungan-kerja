import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, AlertController } from '@ionic/angular';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  nik: string = '';
  isModalOpen: boolean = false;
  isNumber: boolean = false;

  constructor(
    private navCtrl: NavController,
    private modalController: ModalController,
    private alertController: AlertController,
    private datservice : DataService
  ) {}

  ngOnInit() {
    const savedNik = localStorage.getItem('nik');
    if (savedNik) {
      this.navCtrl.navigateRoot('tabs/tab1'); 
    }
    
  }

  getData() {
    this.datservice.login(
      {
        "username":"3404090610980002",
        "password":"623404"
    }
    ).subscribe(response => {
      console.log (response) 
      if (response.status == 'success') {
        this.isNumber = true;
        this.isModalOpen = true;
        localStorage.setItem('nik', this.nik); 
      } else {
        this.isNumber = false;
        this.isModalOpen = true;
      }
    });
  }

  validateInput(event: KeyboardEvent) {
    const key = event.key;
    const isNumericInput = /^[0-9]*$/.test(key);
    
    const isControlKey = key === 'Backspace' || key === 'Delete' || key === 'ArrowLeft' || key === 'ArrowRight';
    
    if (!isNumericInput && !isControlKey) {
      event.preventDefault();  
    } else if (this.nik.length >= 16 && !isControlKey) {
      event.preventDefault(); 
    } else {
      this.isNumber = true;
    }
  }

  openSavePopup() {
    this.getData()
    
  }

  closeSavePopup() {
    this.isModalOpen = false;
  }

  cancel() {
    this.closeSavePopup();
  }

  goToTab1() {
    this.closeSavePopup();
    this.navCtrl.navigateRoot('tabs/tab1'); 
  }

  async showValidationAlert() {
    if (!this.isNumeric(this.nik)) {
      const alert = await this.alertController.create({
        header: 'Gagal',
        message: 'NIK harus berupa angka.',
        buttons: ['OK'],
      });

      await alert.present();
    }
  }

  private isNumeric(value: string): boolean {
    return /^\d+$/.test(value);
  }

  
}
