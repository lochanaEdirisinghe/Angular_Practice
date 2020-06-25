import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFourComponent } from './customer-four.component';

describe('CustomerFourComponent', () => {
  let component: CustomerFourComponent;
  let fixture: ComponentFixture<CustomerFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
