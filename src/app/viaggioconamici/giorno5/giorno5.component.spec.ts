import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Giorno5Component } from './giorno5.component';

describe('Giorno5Component', () => {
  let component: Giorno5Component;
  let fixture: ComponentFixture<Giorno5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Giorno5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Giorno5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
