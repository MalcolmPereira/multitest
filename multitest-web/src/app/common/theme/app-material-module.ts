import { NgModule } from '@angular/core'

import {
  MatToolbarModule,
  MatTabsModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatMenuModule
} from '@angular/material';

@NgModule({
  imports: [
            MatToolbarModule,
            MatTabsModule,
            MatCardModule,
            MatFormFieldModule,
            MatInputModule,
            MatIconModule,
            MatMenuModule
  ],
  exports: [
            MatToolbarModule,
            MatTabsModule,
            MatCardModule,
            MatFormFieldModule,
            MatInputModule,
            MatIconModule,
            MatMenuModule

  ],
})
export class AppMaterialModule {
}
