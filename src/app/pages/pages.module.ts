import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { RollsComponent } from './rolls/rolls.component';
import { HandrollComponent } from './handroll/handroll.component';


@NgModule({
  declarations: [
    RollsComponent,
    HandrollComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    
  ],
  exports:[
    RollsComponent,
    HandrollComponent
  ]
})
export class PagesModule { }
