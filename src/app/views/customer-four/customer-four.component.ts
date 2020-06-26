import { Component, OnInit } from '@angular/core';
import {Customer} from "../../dto/customer";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-customer-four',
  templateUrl: './customer-four.component.html',
  styleUrls: ['./customer-four.component.css']
})
export class CustomerFourComponent implements OnInit {


  form=new FormGroup({
    id: new FormControl('', [Validators.required, Validators.minLength(4)]),
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    address: new FormControl('', [Validators.required, Validators.minLength(4)])
  })

  customers:Customer[]=[]
  constructor() { }

  ngOnInit(): void {
  }

  get cusId(){
    return this.form.get('id')
  }

  get cusName(){
    return this.form.get('name')
  }

  get cusAddr(){
    return this.form.get('address')
  }

  get f(){
    return this.form
  }

  submitCustomer(){
    this.customers.push(this.form.value)

  }
  selectRow(c:Customer){
    this.form.setValue(c)
  }

  reset(){


  }
}
