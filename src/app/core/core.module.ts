import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from '../login/login.module';
import { TextModule } from '../text/text.module';
import { IconsModule } from '../icons/icons.module';
import { UiModule } from '../ui/ui.module';
import { TemplatesModule } from '../templates/templates.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';



@NgModule({
  declarations: [FooterComponent, HeaderComponent, NavComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LoginModule,
    TextModule,
    IconsModule,
    UiModule,
    TemplatesModule,
    NgbModule,
    FooterComponent,
    HeaderComponent,
    NavComponent,
  ]
})
export class CoreModule { }