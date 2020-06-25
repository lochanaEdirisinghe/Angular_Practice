import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFiveComponent } from './customer-five.component';

describe('CustomerFiveComponent', () => {
  let component: CustomerFiveComponent;
  let fixture: ComponentFixture<CustomerFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
