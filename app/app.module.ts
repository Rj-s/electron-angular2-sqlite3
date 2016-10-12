import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }  from '@angular/router';
import { AppComponent }  from './main/app.component';
import { DashboardComponent }    from './component/dashboard';
import { NewCustomerComponent }  from './component/newCustomer';

@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboardState',
        pathMatch: 'full'
      },
      {
        path: 'dashboardState',
        component: DashboardComponent
      },
      {
        path: 'newCustomerState',
        component: NewCustomerComponent
      }
    ])
   ],
  declarations: [ AppComponent,DashboardComponent,NewCustomerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
