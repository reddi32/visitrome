import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DolciaromaComponent } from './dolciaroma.component';

describe('DolciaromaComponent', () => {
  let component: DolciaromaComponent;
  let fixture: ComponentFixture<DolciaromaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DolciaromaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DolciaromaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
