import { Component, OnInit } from '@angular/core';
import {Customer} from "../../dto/customer";

@Component({
  selector: 'app-customer-two',
  templateUrl: './customer-two.component.html',
  styleUrls: ['./customer-two.component.css']
})
export class CustomerTwoComponent implements OnInit {


  customer: Customer=new Customer()

  customers:Customer[]=[];
  constructor() { }

  ngOnInit(): void {
  }

  saveCus() {
    const cus = Object.assign({}, this.customer)
    this.customers.push(cus)
  }
  selectCus(c){
    this.customer=c;
  }
  deleteRow(param:{id:string, name:string, address:string}){
    for (let el of this.customers) {
      if (el.id == param.id) {
        this.customers.splice(this.customers.indexOf(el), 1)
      }
    }
  }

  update(){
    this.customer=new Customer();
  }
}
