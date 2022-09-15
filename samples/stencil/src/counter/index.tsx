/* @jsx h */
import {h, Component, State, Host} from "@stencil/core"

@Component({
    tag: "my-counter",
    styleUrl: "index.css",
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
        return (
          <Host>
            <button onClick={this.decrement.bind(this)}>-</button>
            <span>{this.count}</span>
            <button onClick={this.increment.bind(this)}>+</button>
          </Host>
        );
      }
}