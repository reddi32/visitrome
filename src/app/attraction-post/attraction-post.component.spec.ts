import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttractionPostComponent } from './attraction-post.component';

describe('AttractionPostComponent', () => {
  let component: AttractionPostComponent;
  let fixture: ComponentFixture<AttractionPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttractionPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttractionPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
