import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'new-customer',
  template: `<div>
  {{title}}
    <div class="customer-panel">
      <input type="text" />
    </div>
  </div>`
})


export class NewCustomerComponent {
 title = "Please enter new customer details."

}
