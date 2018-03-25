import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgReduxModule, NgRedux } from '@angular-redux/store'

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing'

import {
  AppMaterialModule,
  AppHeaderComponent
} from './common/index';

import {
  HomeComponent
} from './home/index';

import {
      UserAction,
      UserSessionReducer,
      IUserState,
      INITIAL_STATE,
      UserSessionActions,
      UserService,
      UserLoginComponent
} from './user/index';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgReduxModule,
    AppRoutingModule,
    AppMaterialModule,
  ],
  declarations: [
    AppComponent,
    AppHeaderComponent,
    UserLoginComponent,
    HomeComponent
  ],
  providers: [
      UserSessionActions,
      UserService
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
