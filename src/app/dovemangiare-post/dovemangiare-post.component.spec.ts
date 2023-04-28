import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DovemangiarePostComponent } from './dovemangiare-post.component';

describe('DovemangiarePostComponent', () => {
  let component: DovemangiarePostComponent;
  let fixture: ComponentFixture<DovemangiarePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DovemangiarePostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DovemangiarePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
