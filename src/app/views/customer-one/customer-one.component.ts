import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-one',
  templateUrl: './customer-one.component.html',
  styleUrls: ['./customer-one.component.css']
})
export class CustomerOneComponent implements OnInit {

  id:string=''
  name:string=''
  address:string=''
  // cusD:{id:string, name:string, address:string}[]=[];
  cusD:any[]=[];
  constructor() { }

  ngOnInit(): void {
  }

  addDetails() {
    this.cusD.push({"id": this.id, "name": this.name, "address": this.address})
  }
  tableData(param:{id:string, name:string, address:string}){
    this.id=param.id
    this.name=param.name
    this.address=param.address
  }
  deleteRow(param:{id:string, name:string, address:string}){
    for (let el of this.cusD) {
      if (el.id == param.id) {
        this.cusD.splice(this.cusD.indexOf(el), 1)
      }
    }
  }
  /* update(){
     for (let el of this.cusD) {
       if (el.id == this.id) {
         el.name=this.name
         el.address=this.address
       }
     }
   }*/
  update(){
    this.cusD.map((v)=>{
      if(v.id==this.id){
        v.name=this.name
        v.address=this.address
      }
      return v
    })
  }

}
