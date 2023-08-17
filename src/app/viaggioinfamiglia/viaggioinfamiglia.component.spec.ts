import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViaggioinfamigliaComponent } from './viaggioinfamiglia.component';

describe('ViaggioinfamigliaComponent', () => {
  let component: ViaggioinfamigliaComponent;
  let fixture: ComponentFixture<ViaggioinfamigliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViaggioinfamigliaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViaggioinfamigliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
