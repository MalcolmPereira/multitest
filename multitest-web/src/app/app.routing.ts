import { NgModule }             from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/index";
import { UserLoginComponent } from "./user/index";
import { MultiplyComponent,DivideComponent,PercentageComponent } from "./generatetest/index";


export const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: UserLoginComponent },
  { path: "home", component: HomeComponent },
  { path: "multiply", component: MultiplyComponent },
  { path: "divide", component: DivideComponent },
  { path: "percent", component: PercentageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
