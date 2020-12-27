import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../../services.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
 dropdownSettings:IDropdownSettings = {};
  public data : any= [] 
  dropdownList : any = [];
  selectedItems : Array<any> = [];
  AddCard : Array<any> = [];
  constructor(public Services : ServicesService ) { 
    this.AddCard = this.Services._OneProduct
  }


  

  ngOnInit(): void {
    this.Services.getNavbar().subscribe( res => this.data = res)
    this.Services.getSearch().subscribe( res => this.dropdownList = res)
     
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

 
   


    
  
 

}



 
  
  



