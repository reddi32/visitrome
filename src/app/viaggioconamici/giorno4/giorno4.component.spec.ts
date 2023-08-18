import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Giorno4Component } from './giorno4.component';

describe('Giorno4Component', () => {
  let component: Giorno4Component;
  let fixture: ComponentFixture<Giorno4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Giorno4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Giorno4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
