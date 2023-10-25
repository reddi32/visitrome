import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialitaenogastronomicheComponent } from './specialitaenogastronomiche.component';

describe('SpecialitaenogastronomicheComponent', () => {
  let component: SpecialitaenogastronomicheComponent;
  let fixture: ComponentFixture<SpecialitaenogastronomicheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialitaenogastronomicheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialitaenogastronomicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
