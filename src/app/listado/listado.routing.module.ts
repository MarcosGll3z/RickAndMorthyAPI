import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListimageComponent } from './pages/listimage/listimage.component';

const routes: Routes = [
  {
    path:'',
    component: ListimageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListadoRoutingModule { }