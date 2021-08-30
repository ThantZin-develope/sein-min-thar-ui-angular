import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PageRoutingModule } from './page-routing-module';
import { FormsModule } from '@angular/forms';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { HomeComponent } from './home/home.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { DashboadComponent } from './dashboad/dashboad.component';
import { Items1Component } from './Items1/Items1.component';
import { ItemsComponent } from './items/items.component';
import { BuyingComponent } from './buying/Buying.component';
import { SellingComponent } from './selling/Selling.component';
import { IncomeComponent } from './income/income.component';
import { OutgoingComponent } from './outgoing/outgoing.component';
import { EmployeesComponent } from './employees/employees.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SettingComponent } from './setting/setting.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzDividerModule } from 'ng-zorro-antd/divider';
@NgModule({
  declarations: [
    HomeComponent,
    DashboadComponent,
    Items1Component,
    ItemsComponent,
    BuyingComponent,
    SellingComponent,
    IncomeComponent,
    OutgoingComponent,
    EmployeesComponent,
    NotificationsComponent,
    SettingComponent

  ],
  imports: [
    PageRoutingModule,
    TranslateModule,
    CommonModule,
    NzIconModule,
    FormsModule,
    NzMenuModule,
    NzLayoutModule,
    NzButtonModule,
    NzImageModule,
    NzPageHeaderModule,
    NzToolTipModule,
    NzDividerModule

  ]
})
export class PagesModule { }
