import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LaporKegiatanPage } from './lapor-kegiatan.page';

describe('LaporKegiatanPage', () => {
  let component: LaporKegiatanPage;
  let fixture: ComponentFixture<LaporKegiatanPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LaporKegiatanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
