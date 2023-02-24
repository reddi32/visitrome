import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VitanotturnaComponent } from './vitanotturna.component';

describe('VitanotturnaComponent', () => {
  let component: VitanotturnaComponent;
  let fixture: ComponentFixture<VitanotturnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VitanotturnaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VitanotturnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
