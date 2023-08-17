import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Giorno1Component } from './giorno1.component';

describe('Giorno1Component', () => {
  let component: Giorno1Component;
  let fixture: ComponentFixture<Giorno1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Giorno1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Giorno1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
