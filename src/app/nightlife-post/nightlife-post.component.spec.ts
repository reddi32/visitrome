import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NightlifePostComponent } from './nightlife-post.component';

describe('NightlifePostComponent', () => {
  let component: NightlifePostComponent;
  let fixture: ComponentFixture<NightlifePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NightlifePostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NightlifePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
