import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomTabComponent } from './custom-tab/custom-tab.component';

const routes: Routes = [
  { path: "custom-tab", component: CustomTabComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
