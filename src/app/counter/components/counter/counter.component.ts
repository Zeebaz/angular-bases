import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h2>Counter: {{ counter }}</h2>
    <button (click)="increaseBy(2)">Increment</button>
    <button (click)="setTo(10)">Reset</button>
    <button (click)="decrement()">Decrement</button>`,
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy(value: number) {
    this.counter += value;
  }

  decrement() {
    this.counter -= 1;
  }

  setTo(value: number) {
    this.counter = value;
  }
}
