import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertPostComponent } from './concert-post.component';

describe('ConcertPostComponent', () => {
  let component: ConcertPostComponent;
  let fixture: ComponentFixture<ConcertPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcertPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcertPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
