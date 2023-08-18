import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViaggioconamiciComponent } from './viaggioconamici.component';

describe('ViaggioconamiciComponent', () => {
  let component: ViaggioconamiciComponent;
  let fixture: ComponentFixture<ViaggioconamiciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViaggioconamiciComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViaggioconamiciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
