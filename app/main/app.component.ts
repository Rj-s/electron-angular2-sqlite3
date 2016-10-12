import { Component } from '@angular/core';

@Component({
  moduleId: module.id, 
  selector: 'my-app',
  template: ` <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboardState" routerLinkActive="active">Dashboard</a>
      <a routerLink="/newCustomerState" routerLinkActive="active">New Customer</a>
    </nav>
    <router-outlet></router-outlet>`
})


export class AppComponent {
title = "Customer Information";
}
