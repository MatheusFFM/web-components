/* @jsx h */
import { Component, h, State } from '@stencil/core';

@Component({
    tag: "my-counter",
    styleUrl: "counter.scss",
    shadow: true,
})
export class Counter {
    @State() 
    count: number = 0;

    increment() {
      this.count++;
    }
  
    decrement() {
      this.count--;
    }

    render() {
      return <div>
                <button class="dec" onClick={this.decrement.bind(this)}>-</button>
                  <span>{this.count}</span>
                <button class="inc" onClick={this.increment.bind(this)}>+</button>
              </div>;
    }
}