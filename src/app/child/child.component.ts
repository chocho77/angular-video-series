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

  constructor() {}

  ngOnInit(): void {
  }

  sendMessage() {
    this.messageEvent.emit('Hello from child!');
  }

}
