import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomainfamigliaPostComponent } from './romainfamiglia-post.component';

describe('RomainfamigliaPostComponent', () => {
  let component: RomainfamigliaPostComponent;
  let fixture: ComponentFixture<RomainfamigliaPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RomainfamigliaPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RomainfamigliaPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
