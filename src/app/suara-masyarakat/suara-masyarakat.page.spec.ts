import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuaraMasyarakatPage } from './suara-masyarakat.page';

describe('SuaraMasyarakatPage', () => {
  let component: SuaraMasyarakatPage;
  let fixture: ComponentFixture<SuaraMasyarakatPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SuaraMasyarakatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
