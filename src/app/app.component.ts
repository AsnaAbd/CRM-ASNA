import { Component } from '@angular/core';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CRM-ASNA-JUILLET';
  theme: string;
  constructor(private ts: ThemeService) {
    this.ts.theme$.subscribe((data) => {
      this.theme = data;
    });
  }
}


