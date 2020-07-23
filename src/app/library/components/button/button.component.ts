import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() href: string;
  @Input() route: string;
  @Input() action: boolean;
  @Input() label: string;
  @Output() clicked: EventEmitter<any> = new EventEmitter();

  constructor() { }
  ngOnInit(): void {
  }
  
  public doAction() {
    this.clicked.emit();
  }
}