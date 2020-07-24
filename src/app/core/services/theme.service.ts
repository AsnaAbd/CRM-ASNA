import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public theme$: BehaviorSubject<string> = new BehaviorSubject('theme1');
  constructor() { }
  public changeTheme(theme: string) {
    this.theme$.next(theme);

  }
}
