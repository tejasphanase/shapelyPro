import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'shapely/home',pathMatch:'full'},
  {path:'shapely',loadChildren:()=>import('./shapley/shapley.module').then(m=>m.ShapleyModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
