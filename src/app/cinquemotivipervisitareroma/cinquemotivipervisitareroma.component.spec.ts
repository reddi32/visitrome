import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinquemotivipervisitareromaComponent } from './cinquemotivipervisitareroma.component';

describe('CinquemotivipervisitareromaComponent', () => {
  let component: CinquemotivipervisitareromaComponent;
  let fixture: ComponentFixture<CinquemotivipervisitareromaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinquemotivipervisitareromaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CinquemotivipervisitareromaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
