import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomainfamigliaComponent } from './romainfamiglia.component';

describe('RomainfamigliaComponent', () => {
  let component: RomainfamigliaComponent;
  let fixture: ComponentFixture<RomainfamigliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RomainfamigliaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RomainfamigliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
