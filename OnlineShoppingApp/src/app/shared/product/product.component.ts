import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public Products : any = [] ;
  Counter : number = 0;

  constructor(
    public Services : ServicesService ,
     ) {
   }

  ngOnInit(): void {
    this.Services.getProduct().subscribe( res => this.Products = res)

  }

  AddtoCard(id:number , name:string , Description: string , image:string  , price:string ) {
    let ProductaddedtoCard = {
      id: id,
      name: name,
      Description: Description,
      image: image,
      price: price,
    }
    this.Services.addItem(ProductaddedtoCard)
  }

}
