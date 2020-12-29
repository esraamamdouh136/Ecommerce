import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../../services/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   public sliders : any = [] ;
  constructor(public Services : ServicesService) {
   }

  ngOnInit(): void {
    this.Services.getsliders().subscribe( res => this.sliders = res)

  }
}

