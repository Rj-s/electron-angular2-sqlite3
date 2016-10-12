import { Component } from '@angular/core';
import { Customer } from '../domain/customer';


@Component({
  moduleId: module.id,
  selector: 'dashboard',
  template: `<div *ngFor="let customer of customers">
    <div class="customer-panel">
      <h4>{{customer.name}}</h4>
    </div>
  </div>`
})


export class DashboardComponent {

customer1 : Customer = {
  id:1,
  name:"Rajesh",
  mobile : 8554076314
}
customer2 : Customer = {
  id:2,
  name:"Komal",
  mobile : 9545825057
}
customer3 : Customer = {
  id:3,
  name:"Dinesh",
  mobile : 9954076323
}

customers:Customer[] = [this.customer1, this.customer2, this.customer3];

}
