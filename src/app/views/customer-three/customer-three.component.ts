import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Customer} from "../../dto/customer";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-customer-three',
  templateUrl: './customer-three.component.html',
  styleUrls: ['./customer-three.component.css']
})
export class CustomerThreeComponent implements OnInit {


  @ViewChild('f')form:NgForm;
  @ViewChild('rfCusId')rfCusId: ElementRef

  customers:Customer[]=[]
  constructor() { }

  ngOnInit(): void {
  }

  submitCustomer(f){
    this.customers.push(f.value)
    this.reset()

  }
  selectRow(c:Customer){
    this.form.setValue(c)
  }

  reset(){
    this.form.reset();
    this.rfCusId.nativeElement.focus()

  }


}
