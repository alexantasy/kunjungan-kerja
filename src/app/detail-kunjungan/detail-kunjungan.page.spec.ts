import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailKunjunganPage } from './detail-kunjungan.page';

describe('DetailKunjunganPage', () => {
  let component: DetailKunjunganPage;
  let fixture: ComponentFixture<DetailKunjunganPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailKunjunganPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
