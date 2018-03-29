import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgReduxModule, NgRedux } from "@angular-redux/store"
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from "./app.component";

import { AppRoutingModule } from "./app.routing"

import {
  AppMaterialModule,
  AppHeaderComponent,
  IAppConfig,
  AppConfig,
  APP_CONFIG
} from "./common/index";

import {
  HomeComponent
} from "./home/index";

import {
      UserAction,
      UserSessionReducer,
      IUserState,
      INITIAL_STATE,
      UserSessionActions,
      UserService,
      UserLoginComponent
} from "./user/index";

import {
  MultiplyComponent,
  BasicsService
} from "./generatetest/index";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgReduxModule,
    HttpClientModule,
    AppRoutingModule,
    AppMaterialModule,
  ],
  declarations: [
    AppComponent,
    AppHeaderComponent,
    UserLoginComponent,
    HomeComponent,
    MultiplyComponent
  ],
  providers: [
      UserSessionActions,
      UserService,
      BasicsService,
      { provide: APP_CONFIG, useValue: AppConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IUserState>) {
    ngRedux.configureStore(
      UserSessionReducer,
      INITIAL_STATE);
  }
}
