import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristinfopointComponent } from './touristinfopoint.component';

describe('TouristinfopointComponent', () => {
  let component: TouristinfopointComponent;
  let fixture: ComponentFixture<TouristinfopointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TouristinfopointComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TouristinfopointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
