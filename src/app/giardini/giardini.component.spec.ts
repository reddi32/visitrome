import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiardiniComponent } from './giardini.component';

describe('GiardiniComponent', () => {
  let component: GiardiniComponent;
  let fixture: ComponentFixture<GiardiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiardiniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiardiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
