import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextPagesComponent } from './components/text-pages/text-pages.component';
import { TextBandeauComponent } from './components/text-bandeau/text-bandeau.component';



@NgModule({
  declarations: [TextPagesComponent, TextBandeauComponent],
  imports: [
    CommonModule
  ],
  exports: [TextPagesComponent, TextBandeauComponent]
})
export class TextModule { }
