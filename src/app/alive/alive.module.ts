import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AliveRoutingModule } from './alive-routing.module';
import { AliveMainComponent } from './alive-main/alive-main.component';

@NgModule({
  declarations: [AliveMainComponent],
  imports: [
    CommonModule,
    AliveRoutingModule
  ]
})
export class AliveModule { }
