import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerThreeComponent } from './customer-three.component';

describe('CustomerThreeComponent', () => {
  let component: CustomerThreeComponent;
  let fixture: ComponentFixture<CustomerThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
