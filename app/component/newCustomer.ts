import { Component, Input } from '@angular/core';
import { Customer } from '../domain/customer';
//import  * as sqlite3 from 'sqlite3';


@Component({
  moduleId: module.id,
  selector: 'new-customer',
  template: `<div>
  {{title}}
    <div class="customer-panel">
       <input [(ngModel)]="newCustomer.id" placeholder ="id" />
       <input [(ngModel)]="newCustomer.name" placeholder ="name" />
       <input [(ngModel)]="newCustomer.mobile" placeholder ="mobile" />
       <button (click)="saveCustomer()">Save</button>
    </div>
  </div>`
})


export class NewCustomerComponent {
 title = "Please enter new customer details."

@Input()
newCustomer: Customer = new Customer();

saveCustomer(){
  alert(this.newCustomer.name);
  // #####Below db initialization is NOT working. #########
  //sqlite3.verbose();
  //var db = new sqlite3.Database('mydbs.db3');
  // db.serialize(function() {
  //
  //   db.run("CREATE TABLE if not exists customer (name TEXT, mobile TEXT)");
  //
  //   for (var i = 0; i < 10; i++) {
  //
  //       db.run("INSERT INTO customer(name, mobile) VALUES('Rajesh','12344554')");
  //    }
  //
  //
  //    db.each("SELECT rowid AS id, name, mobile FROM customer", function(err:any, row:any) {
  //        console.log(row.id + " : " + row.name + " : " + row.mobile);
  //    });
  //  });
  //db.close();
}


}
