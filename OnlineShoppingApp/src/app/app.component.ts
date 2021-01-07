import { transition } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public CurrentNav : string = '';
  constructor(public router : Router){}
  title = 'OnlineShoppingApp';

}

 