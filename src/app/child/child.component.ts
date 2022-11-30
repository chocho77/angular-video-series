import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input()
  childMessage!: string;
  @Output() messageEvent = new EventEmitter<string>();
  @Output() messageEvent1 = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
  }

  sendMessage() {
    this.messageEvent.emit('Hello from child!');
  }

  sendMessage1() {
    this.messageEvent1.emit('Hello from child!');
  }

}
