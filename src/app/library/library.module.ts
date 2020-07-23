import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLightComponent } from './components/table-light/table-light.component';
import { ButtonComponent } from './components/button/button.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [TableLightComponent, ButtonComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [TableLightComponent, ButtonComponent]
})
export class LibraryModule { }
