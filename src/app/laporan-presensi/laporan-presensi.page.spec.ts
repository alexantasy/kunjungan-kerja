import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LaporanPresensiPage } from './laporan-presensi.page';

describe('LaporanPresensiPage', () => {
  let component: LaporanPresensiPage;
  let fixture: ComponentFixture<LaporanPresensiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LaporanPresensiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
