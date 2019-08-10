import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { CommonService } from './common.service';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { Observable} from 'rxjs';
import { VendorAuthGuard } from './vendor-auth-guard.service';
import {MatCardModule} from '@angular/material/card';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserManagementComponent } from './user-management/user-management.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { MerchantComponent } from './merchant/merchant.component';
import { NotificationComponent } from './notification/notification.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { TransactionComponent } from './transaction/transaction.component';
import { SaleComponent } from './sale/sale.component';
import {TimeAgoPipe} from 'time-ago-pipe';
import { ManishComponent } from './manish/manish.component';
import { GalleryModule } from  '@ngx-gallery/core';











@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    UserManagementComponent,
    MerchantComponent,
    NotificationComponent,
    TransactionComponent,
    SaleComponent,
    TimeAgoPipe,
    ManishComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right'
    }),
    NgxSpinnerModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    GalleryModule,
    GalleryModule.withConfig({})



    
    
    
  ],
  providers: [CommonService, VendorAuthGuard,],
  bootstrap: [AppComponent]
})
export class AppModule { }
