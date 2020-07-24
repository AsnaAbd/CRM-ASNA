import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title: string;
  public theme: string;
  constructor(private ts: ThemeService) { }
  ngOnInit(): void {
    this.title = 'NASNA App';
    this.ts.theme$.subscribe((theme) => {
      this.theme = theme;
    });
  }
  public changeTheme(event) {
    this.ts.changeTheme(event.target.value);
  }
}
