import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrazioniComponent } from './attrazioni.component';

describe('AttrazioniComponent', () => {
  let component: AttrazioniComponent;
  let fixture: ComponentFixture<AttrazioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttrazioniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttrazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
