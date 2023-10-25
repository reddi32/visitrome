import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarciofiComponent } from './carciofi.component';

describe('CarciofiComponent', () => {
  let component: CarciofiComponent;
  let fixture: ComponentFixture<CarciofiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarciofiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarciofiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
