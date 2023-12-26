import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RollsComponent } from './rolls/rolls.component';
import { HandrollComponent } from './handroll/handroll.component';

const routes: Routes = [
  {path: 'inicio', component: RollsComponent},
  {path: 'handroll', component: HandrollComponent},
  {path: '**', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
