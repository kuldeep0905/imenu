import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


import { DashboardComponent } from './dashboard/dashboard.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { MerchantComponent } from './merchant/merchant.component';
import { NotificationComponent } from './notification/notification.component';
import { VendorAuthGuard } from './vendor-auth-guard.service';
import { TransactionComponent } from './transaction/transaction.component';
import { SaleComponent } from './sale/sale.component';
import { ManishComponent } from './manish/manish.component';



const routes: Routes = [
    { path: '', redirectTo:'login',pathMatch:'full' },
    { path: '',component:LoginComponent},
    { path: 'login',component:LoginComponent},

    
    { path: 'dashboard', component: DashboardComponent, canActivate: [VendorAuthGuard]},
    { path: 'usermanagement', component: UserManagementComponent,canActivate: [VendorAuthGuard]},
    { path: 'merchant', component: MerchantComponent, canActivate: [VendorAuthGuard]},
    { path: 'notification', component: NotificationComponent,canActivate: [VendorAuthGuard]},
    { path: 'transaction', component: TransactionComponent, canActivate: [VendorAuthGuard]},
    { path: 'manish', component:ManishComponent}
    // { path: 'sale', component: SaleComponent, canActivate: [VendorAuthGuard]}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //,{onSameUrlNavigation:'reload'}
  exports: [RouterModule]
})
export class AppRoutingModule { }
