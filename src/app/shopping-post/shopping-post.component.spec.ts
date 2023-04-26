import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingPostComponent } from './shopping-post.component';

describe('ShoppingPostComponent', () => {
  let component: ShoppingPostComponent;
  let fixture: ComponentFixture<ShoppingPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
