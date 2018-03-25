import { NgModule } from '@angular/core'

import {
  MatToolbarModule,
  MatTabsModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
            MatToolbarModule,
            MatTabsModule,
            MatCardModule,
            MatFormFieldModule,
            MatInputModule
  ],
  exports: [
            MatToolbarModule,
            MatTabsModule,
            MatCardModule,
            MatFormFieldModule,
            MatInputModule
  ],
})
export class AppMaterialModule {
}
