import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetfoodComponent } from './streetfood.component';

describe('StreetfoodComponent', () => {
  let component: StreetfoodComponent;
  let fixture: ComponentFixture<StreetfoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreetfoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreetfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
