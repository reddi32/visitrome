import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Giorno8Component } from './giorno8.component';

describe('Giorno8Component', () => {
  let component: Giorno8Component;
  let fixture: ComponentFixture<Giorno8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Giorno8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Giorno8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
