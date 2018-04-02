import { BasicComponent } from './visualization/basic/basic.component';
import { IndexationComponent } from './indexation/indexation.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: BasicComponent},
  {path: 'kafka', component: IndexationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
