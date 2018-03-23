import { NgModule } from '@angular/core'

import {
  MatToolbarModule,
  MatTabsModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  imports: [
            MatToolbarModule,
            MatTabsModule,
            MatCardModule
  ],
  exports: [
            MatToolbarModule,
            MatTabsModule,
            MatCardModule
  ],
})
export class AppMaterialModule {
}
