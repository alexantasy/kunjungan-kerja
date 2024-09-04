import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-laporan-presensi',
  templateUrl: 'laporan-presensi.page.html',
  styleUrls: ['laporan-presensi.page.scss'],
})
export class LaporanPresensiPage {
  events = [
    { date: '2024-07-16T00:00:00', place: 'Kelurahan Ngasem', time: '09:00 - 13:00 WIB' },
    { date: '2024-07-16T00:00:00', place: 'Kelurahan Ngasem', time: '09:00 - 13:00 WIB' },
    { date: '2024-07-16T00:00:00', place: 'Kelurahan Ngasem', time: '09:00 - 13:00 WIB' },
    { date: '2024-07-16T00:00:00', place: 'Kelurahan Ngasem', time: '09:00 - 13:00 WIB' }
  ];

  constructor(private navCtrl: NavController) {}

  goToDetail() {
    this.navCtrl.navigateForward('/lapor-kegiatan');
  }

  ngOnInit() {}

  showOptions = false;
  selectedOption: string | null = null;
  selectedYear: number | null = null;
  selectedMonth: string | null = null;
  startDate: string | null = null;
  endDate: string | null = null;
  showReport = false;
  showDatePicker = false;

  years = [2024, 2023, 2022];
  month = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.showOptions = false;
    this.selectedYear = null;
    this.selectedMonth = null;
    this.startDate = null;
    this.endDate = null;
    this.showReport = false;
    this.showDatePicker = this.selectedOption === 'Hari';  // Tampilkan date picker jika Hari dipilih
  }

  cancelSelection() {
    this.selectedOption = null;
    this.showOptions = false;
    this.showDatePicker = false;  // Sembunyikan date picker saat membatalkan pilihan
  }

  onYearChange(event: any) {
    this.selectedYear = event.detail.value;
  }

  onMonthChange(event: any) {
    this.selectedMonth = event.detail.value;
  }

  onStartDateChange(event: any) {
    this.startDate = event.detail.value;
  }

  onEndDateChange(event: any) {
    this.endDate = event.detail.value;
  }

  searchReport() {
    if (this.selectedOption === 'Tahun' && this.selectedYear) {
      this.showReport = true;
    } else if (this.selectedOption === 'Bulan' && this.selectedMonth) {
      this.showReport = true;
    } else if (this.selectedOption === 'Hari' && this.startDate && this.endDate) {
      this.showReport = true;
      this.showDatePicker = false;  // Sembunyikan date picker setelah laporan muncul
    } else {
      this.showReport = false;
    }
  }
  
}

