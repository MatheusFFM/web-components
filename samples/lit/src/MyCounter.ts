import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class MyCounter extends LitElement {
  static styles = css`
    * {
      font-size: 200%;
    }

    span {
      width: 4rem;
      display: inline-block;
      text-align: center;
      font-family: 'Poppins';
    }

    button {
      width: 4rem;
      height: 4rem;
      border: none;
      border-radius: 10px;
      color: white;
    }

    button:hover {
      cursor: pointer
    }

    .dec {
      background-color: #ED1941;
    }

    .inc {
      background-color: #20BEC6;
    }
  `;

  @property({ type: Number }) count = 0;

  render() {
    return  html`
      <button class="dec" @click="${this.decrement}">-</button>
      <span>${this.count}</span>
      <button class="inc" @click="${this.increment}">+</button>
    `;
  }

  increment() {
    this.count += 1;
  }

  decrement() {
    this.count -= 1;
  }
}
