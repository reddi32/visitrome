import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PianificaviaggioComponent } from './muoversiaroma.component';

describe('PianificaviaggioComponent', () => {
  let component: PianificaviaggioComponent;
  let fixture: ComponentFixture<PianificaviaggioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PianificaviaggioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PianificaviaggioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
