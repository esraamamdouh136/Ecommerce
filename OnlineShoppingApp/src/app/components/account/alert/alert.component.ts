import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';

import { Alert, AlertType } from '../../../model/alert';
import { AlertService } from '../../../services/alert.service';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  @Input() id = 'default-alert';
  @Input() fade = true;
  alerts: Alert[] = [];
  alertSubscription!: Subscription;
  routeSubscription!: Subscription;


  constructor(public sub : Subscription) {
    console.log(sub)
   }

  ngOnInit(): void {
  }

}
