import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Giorno2Component } from './giorno2.component';

describe('Giorno2Component', () => {
  let component: Giorno2Component;
  let fixture: ComponentFixture<Giorno2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Giorno2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Giorno2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
