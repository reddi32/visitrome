import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViaggioincoppiaComponent } from './viaggioincoppia.component';

describe('ViaggioincoppiaComponent', () => {
  let component: ViaggioincoppiaComponent;
  let fixture: ComponentFixture<ViaggioincoppiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViaggioincoppiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViaggioincoppiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
