import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-suara-masyarakat',
  templateUrl: './suara-masyarakat.page.html',
  styleUrls: ['./suara-masyarakat.page.scss'],
})
export class SuaraMasyarakatPage implements OnInit {

  events = [
    { date: 'Masyarakat Desa Maju meminta perbaikan dan peningkatan jalan desa sepanjang 5 km yang saat ini dalam kondisi rusak parah, menghambat akses ekonomi dan mobilitas warga.', place: 'Rp 2.500.000.000', time: 'Komisi III (Bidang Pembangunan dan Infrastruktur)' },
    { date: 'Masyarakat Desa Maju meminta perbaikan dan peningkatan jalan desa sepanjang 5 km yang saat ini dalam kondisi rusak parah, menghambat akses ekonomi dan mobilitas warga.', place: 'Rp 2.500.000.000', time: 'Komisi III (Bidang Pembangunan dan Infrastruktur)' } 
  ];

  constructor(private navCtrl: NavController, private platform: Platform) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.handleBackButton();
    });
  }
  handleBackButton() {
    this.navCtrl.back(); 
  }

  goToDetail() {
    this.navCtrl.navigateForward('/detail-suararakyat');
  }

  ngOnInit() {
  }

}
