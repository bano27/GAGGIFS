import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifHeaderComponent } from './gif-header.component';

describe('GifHeaderComponent', () => {
  let component: GifHeaderComponent;
  let fixture: ComponentFixture<GifHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GifHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
