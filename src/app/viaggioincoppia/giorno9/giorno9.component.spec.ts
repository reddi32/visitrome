import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Giorno9Component } from './giorno9.component';

describe('Giorno9Component', () => {
  let component: Giorno9Component;
  let fixture: ComponentFixture<Giorno9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Giorno9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Giorno9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
