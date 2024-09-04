import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core'; // Import ChangeDetectorRef

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  isModalOpen: boolean = false;
  
  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef // Inject ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.openModal();
  }

  openModal() {
    this.isModalOpen = true;
    this.cdr.detectChanges(); // Tambahkan ini untuk memaksa deteksi perubahan
  }

  closeModal() {
    this.isModalOpen = false;
    this.cdr.detectChanges(); // Tambahkan ini untuk memaksa deteksi perubahan
  }

  moreDetails() {
    console.log("Selengkapnya");
    this.closeModal();
    setTimeout(() => {
      this.router.navigate(['/tabs/tab2']);
    }, 100); 
  }

  goToPage(page: string) {
    if (page === 'kunjungan-selesai') {
      this.router.navigate(['/kunjungan-selesai']);
    } else if (page === 'tab2') {
      this.router.navigate(['/tabs/tab2']);
    } else if (page === 'suara-masyarakat') {
      this.router.navigate(['/suara-masyarakat']);
    }
  }
}
