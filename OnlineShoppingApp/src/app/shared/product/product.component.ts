import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public Products : any = [] ;
  constructor(public Services : ServicesService) {
    console.log(this.Products)
   }

  ngOnInit(): void {
    this.Services.getProduct().subscribe( res => this.Products = res)

  }

}
