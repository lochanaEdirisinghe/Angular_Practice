import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSixComponent } from './customer-six.component';

describe('CustomerSixComponent', () => {
  let component: CustomerSixComponent;
  let fixture: ComponentFixture<CustomerSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
