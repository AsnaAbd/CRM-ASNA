import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconCloseComponent } from './components/icon/icon-close.component';
import { IconDeleteComponent } from './components/icon/icon-delete.component';
import { IconEditComponent } from './components/icon/icon-edit.component';
import { IconNavComponent } from './components/icon/icon-nav.component';



@NgModule({
  declarations: [IconDeleteComponent, IconEditComponent, IconCloseComponent, IconNavComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [IconDeleteComponent, IconEditComponent, IconCloseComponent, IconNavComponent]
})
export class IconsModule { }