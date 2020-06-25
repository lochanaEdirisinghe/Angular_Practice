import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTwoComponent } from './customer-two.component';

describe('CustomerTwoComponent', () => {
  let component: CustomerTwoComponent;
  let fixture: ComponentFixture<CustomerTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
