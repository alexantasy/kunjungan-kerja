import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { FileService } from '../file-service/file-service';



@Component({
  selector: 'app-detail-suararakyat',
  templateUrl: './detail-suararakyat.page.html',
  styleUrls: ['./detail-suararakyat.page.scss'],
})
export class DetailSuararakyatPage implements OnInit {

  constructor( 
    private navCtrl: NavController, 
    private platform: Platform,
    private fileService: FileService
  ) { 
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.handleBackButton();
    });
  }
  handleBackButton() {
    this.navCtrl.back(); 
  }

  onDownload() {
    console.log('onDownload')
    this.fileService.downloadFile();
  }
  

  ngOnInit() {
  }

}
