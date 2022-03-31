import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListimageComponent } from './pages/listimage/listimage.component';
import { ListadoRoutingModule } from './listado.routing.module';

@NgModule({
  declarations: [
    ListimageComponent
  ],
  imports: [
    CommonModule,
    ListadoRoutingModule
  ]
})
export class ListadoModule { }
