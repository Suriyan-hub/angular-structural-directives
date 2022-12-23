import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>{{ 'Hello ' + parentData }}</h2>
    <h2>{{ 'Hello ' + name }}</h2>
    <button (click)="fireEvent()">Send Event</button>
  `,
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  @Input() public parentData: any;
  @Input('parentData1') public name: any;
  @Output() public childEvent = new EventEmitter();
  fireEvent() {
    this.childEvent.emit('Hey Angular');
  }
}
