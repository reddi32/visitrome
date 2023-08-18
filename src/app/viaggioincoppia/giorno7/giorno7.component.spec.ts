import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Giorno7Component } from './giorno7.component';

describe('Giorno7Component', () => {
  let component: Giorno7Component;
  let fixture: ComponentFixture<Giorno7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Giorno7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Giorno7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
