import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() data:any;

  @Output() eve=new EventEmitter();

  bookProduct(t:string){
    this.eve.emit(t)
  }
  constructor() { 
  }
  ngOnInit(): void {
  }


}
