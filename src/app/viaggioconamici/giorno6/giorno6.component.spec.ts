import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Giorno6Component } from './giorno6.component';

describe('Giorno6Component', () => {
  let component: Giorno6Component;
  let fixture: ComponentFixture<Giorno6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Giorno6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Giorno6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
