import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthGuard } from "../auth-guard";
import { BuyingComponent } from "./buying/Buying.component";

import { DashboadComponent } from "./dashboad/dashboad.component";
import { EmployeesComponent } from "./employees/employees.component";
import { HomeComponent } from "./home/home.component";
import { IncomeComponent } from "./income/income.component";
import { ItemsComponent } from "./items/items.component";
import { Items1Component } from "./Items1/Items1.component";
import { NotificationsComponent } from "./notifications/notifications.component";
import { OutgoingComponent } from "./outgoing/outgoing.component";
import { PlaygroundComponent } from "./playground/playground.component";
import { SellingComponent } from "./selling/Selling.component";
import { SettingComponent } from "./setting/setting.component";




const appRoutes: Routes = [
  {
    path:'',
    component: HomeComponent,
    children:[
      {
        path: 'dashboard',
        component: DashboadComponent,
        // canActivateChild: [AuthGuard],

      },
      {
        path: 'items',
        component: ItemsComponent,
        // canActivateChild: [AuthGuard],
      },
      {
        path:'items1',
        component: Items1Component
      },
      {
        path: 'test',
        component: PlaygroundComponent,
      },
      {
        path:'buying',
        component: BuyingComponent,
      },
      {
        path:'selling',
        component:SellingComponent,
      },
      {
        path:'income',
        component:IncomeComponent
      },
      {
        path:'outgoing',
        component:OutgoingComponent
      },{
        path:'employees',
        component:EmployeesComponent
      },
      {
        path:'notifications',
        component:NotificationsComponent,
      },{
        path:'setting',
        component:SettingComponent,
      }

    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class PageRoutingModule{

}
