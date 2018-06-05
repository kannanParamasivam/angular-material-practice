import { NgModule } from '@angular/core';

import { MatButtonModule, MatCheckboxModule, MatIconModule, MatIcon } from "@angular/material";

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule
  ]
})
export class materialModule { }
