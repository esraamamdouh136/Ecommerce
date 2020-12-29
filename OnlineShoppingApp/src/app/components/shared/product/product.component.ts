import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../../services/services.service';
import { ToastrService } from 'ngx-toastr';


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
    private toastr: ToastrService
     ) {
   }

 

  ngOnInit(): void {
    this.Services.getProduct().subscribe( res => this.Products = res)

  }

  AddtoCard(id:number , name:string , Description: string , image:string  , price:string ) {
    this.toastr.success( name , 'success You Added ' , {
      timeOut: 3000,
    })
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
