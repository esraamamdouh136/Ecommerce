import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(
    private router : Router,
    private accountServices : AccountService
  ) {
    if(this.accountServices.userValue){
      this.router.navigate(['/'])
    }
   }

  ngOnInit(): void {
  }

}
