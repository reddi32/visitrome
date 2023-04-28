import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrePostComponent } from './mostre-post.component';

describe('MostrePostComponent', () => {
  let component: MostrePostComponent;
  let fixture: ComponentFixture<MostrePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrePostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
