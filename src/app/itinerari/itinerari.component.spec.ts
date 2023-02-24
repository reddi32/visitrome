import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItinerariComponent } from './itinerari.component';

describe('ItinerariComponent', () => {
  let component: ItinerariComponent;
  let fixture: ComponentFixture<ItinerariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItinerariComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItinerariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
