import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrittidiromaComponent } from './frittidiroma.component';

describe('FrittidiromaComponent', () => {
  let component: FrittidiromaComponent;
  let fixture: ComponentFixture<FrittidiromaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrittidiromaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrittidiromaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
