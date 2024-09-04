import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-kunjungan-selesai',
  templateUrl: './kunjungan-selesai.page.html',
  styleUrls: ['./kunjungan-selesai.page.scss'],
})
export class KunjunganSelesaiPage implements OnInit {
  events = [
    { date: '2024-07-16T00:00:00', place: 'Kelurahan Ngasem', time: '09:00 - 13:00 WIB' },
    { date: '2024-07-16T00:00:00', place: 'Kelurahan Ngasem', time: '09:00 - 13:00 WIB' },
    { date: '2024-07-16T00:00:00', place: 'Kelurahan Ngasem', time: '09:00 - 13:00 WIB' },
    { date: '2024-07-16T00:00:00', place: 'Kelurahan Ngasem', time: '09:00 - 13:00 WIB' }
  ];

  constructor(private navCtrl: NavController, private platform: Platform) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.handleBackButton();
    });
  }

  ngOnInit() {}

  showOptions = false;
  selectedOption: string | null = null;
  selectedYear: number | null = null;
  selectedMonth: string | null = null;
  startDate: string | null = null;
  endDate: string | null = null;
  showReport = false;
  showDatePickerStart = false;
  showDatePickerEnd = false;

  years = [2024, 2023, 2022];
  months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  yearf = [2024, 2023, 2022,2021, 2020];

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
    this.showDatePickerStart = false;
    this.showDatePickerEnd = false;

    if (option === 'Bulan') {
      this.selectedYear = null;
    }
  }

  cancelSelection() {
    this.selectedOption = null;
    this.showOptions = false;
    this.showDatePickerStart = false;
    this.showDatePickerEnd = false;
  }

  onYearChange(event: any) {
    this.selectedYear = event.detail.value;
    this.selectedMonth = null;
  }

  onMonthChange(event: any) {
    this.selectedMonth = event.detail.value;
    // if (this.selectedYear && this.selectedMonth) {
    //   this.showReport = true;
    // }
  }

  onStartDateChange(event: any) {
    this.startDate = event.detail.value;
    this.showDatePickerStart = false;
  }

  onEndDateChange(event: any) {
    this.endDate = event.detail.value;
    this.showDatePickerEnd = false;
  }

  toggleStartDatePicker() {
    this.showDatePickerStart = !this.showDatePickerStart;
    this.showDatePickerEnd = false;
  }

  toggleEndDatePicker() {
    this.showDatePickerEnd = !this.showDatePickerEnd;
    this.showDatePickerStart = false;
  }

  searchReport() {
    if (this.selectedOption === 'Tahun' && this.selectedYear) {
      this.showReport = true;
    } else if (this.selectedOption === 'Bulan' && this.selectedYear && this.selectedMonth) {
      this.showReport = true;
    } else if (this.selectedOption === 'Hari' && this.startDate && this.endDate) {
      this.showReport = true;
      this.showDatePickerStart = false;
      this.showDatePickerEnd = false;
    } else {
      this.showReport = false;
    }
  }

  handleBackButton() {
    this.navCtrl.back(); 
  }

  goToDetail() {
    this.navCtrl.navigateForward('/detail-kunjungan');
  }
}
