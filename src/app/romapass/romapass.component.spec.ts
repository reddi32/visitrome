import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomapassComponent } from './romapass.component';

describe('RomapassComponent', () => {
  let component: RomapassComponent;
  let fixture: ComponentFixture<RomapassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RomapassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RomapassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
