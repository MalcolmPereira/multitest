import { NgModule } from "@angular/core";

import {
  MatToolbarModule,
  MatTabsModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatMenuModule,
  MatListModule
} from "@angular/material";

@NgModule({
  imports: [
            MatToolbarModule,
            MatTabsModule,
            MatCardModule,
            MatFormFieldModule,
            MatInputModule,
            MatIconModule,
            MatMenuModule,
            MatListModule
  ],
  exports: [
            MatToolbarModule,
            MatTabsModule,
            MatCardModule,
            MatFormFieldModule,
            MatInputModule,
            MatIconModule,
            MatMenuModule,
            MatListModule

  ],
})
export class AppMaterialModule {
}
