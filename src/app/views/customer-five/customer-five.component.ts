import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Post} from "../../dto/Post";
import {PostServiceService} from "../../services/post-service.service";

@Component({
  selector: 'app-customer-five',
  templateUrl: './customer-five.component.html',
  styleUrls: ['./customer-five.component.css']
})
export class CustomerFiveComponent implements OnInit {


  form=new FormGroup({
    id: new FormControl('', [Validators.required, Validators.minLength(4)]),
    userId:new FormControl('', [Validators.required, Validators.minLength(4)]),
    title: new FormControl('', [Validators.required, Validators.minLength(4)]),
    body: new FormControl('', [Validators.required, Validators.minLength(4)])
  })

  posts:Post[]=[]

  constructor(private postservice:PostServiceService) { }

  ngOnInit(): void {
  }

  get cusId(){
    return this.form.get('id')
  }

  get cusTitle(){
    return this.form.get('title')
  }

  get cusBody(){
    return this.form.get('body')
  }

  get userId(){
    return this.form.get('userId')
  }

  get f(){
    return this.form
  }

  submitCustomer(){
    this.postservice.save(this.form.value).subscribe((resp)=>{
      console.log(resp)
    })


  }
  getAll(){
    this.postservice.getAll().subscribe((resp)=>{
      this.posts=resp
    })
  }

  selectRow(p:Post){
    this.form.setValue(p)


  }

  reset(){

  }

}
