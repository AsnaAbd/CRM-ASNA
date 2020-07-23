import { Directive, HostBinding, Input, OnChanges } from '@angular/core';
@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {

  @Input() appState: string;
  @HostBinding('class') nameClass: string;

  constructor() {
  }
  ngOnChanges() {
    this.nameClass = this.formatClass(this.appState);
  }

  private formatClass(state: string): string {
    return `state-${state.toLowerCase()}`;
  }
}

// create a function return a string from a state
// if appState vaut CANCELED => state-canceled
// if appState vaut OPTION => state-option
// if appState vaut CONFIRMED => state-confirmed
// bind property class of host element td with this string