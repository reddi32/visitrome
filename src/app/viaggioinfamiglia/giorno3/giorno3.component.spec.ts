import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Giorno3Component } from './giorno3.component';

describe('Giorno3Component', () => {
  let component: Giorno3Component;
  let fixture: ComponentFixture<Giorno3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Giorno3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Giorno3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
