import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KunjunganSelesaiPage } from './kunjungan-selesai.page';

describe('KunjunganSelesaiPage', () => {
  let component: KunjunganSelesaiPage;
  let fixture: ComponentFixture<KunjunganSelesaiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KunjunganSelesaiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
