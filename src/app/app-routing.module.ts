import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JQueryTestComponent } from "./jquery-test/jquery-test.component";

const routes: Routes = [
  {path:'jquery-test', component:JQueryTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
