import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesModule } from '../templates/templates.module';
import { TextModule } from '../text/text.module';
import { LibraryModule } from '../library/library.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    TemplatesModule,
    TextModule,
    LibraryModule
  ]
})
export class SharedModule { }
