


// 4 - Create a template

const template = document.createElement("template");
template.innerHTML = /*html*/`
<style>
    h1 {
        font-size: 200%;
        text-align: center;
        font-family: 'Poppins';
        color: #ED1941;
    }

</style>

<h1 id="title""></h1>
`

// 1 - Create a Class

class MyTitle extends HTMLElement {
    constructor() {
        super();
        this.message = "Hello CI&Ters"

        // 3 - Attach shadow DOM

        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.update(this.message)
    }

    update(message) {
        this.shadowRoot.getElementById("title").innerHTML = message;
    }
}

// 2 - Register an element

customElements.define("my-title", MyTitle);




// const template = document.createElement("template");
// template.innerHTML = /*html*/`
// <style>

//     * {
//         font-size: 200%;
//     }

//     span {
//         width: 4rem;
//         display: inline-block;
//         text-align: center;
//         font-family: 'Poppins';
//     }

//     button {
//         width: 4rem;
//         height: 4rem;
//         border: none;
//         border-radius: 10px;
//         color: white;
//     }

//     button:hover {
//         cursor: pointer
//     }

//     .dec {
//         background-color: #ED1941;
//     }

//     .inc {
//         background-color: #20BEC6;
//     }

// </style>

// <button id="dec" class="dec">-</button>
// <span id="count"></span>
// <button id="inc" class="inc">+</button>
// `

// class Counter extends HTMLElement {
//     constructor() {
//         super();
//         this.count = 0;
//         this.attachShadow({ mode: "open" });
//     }

//     connectedCallback() {
//         this.shadowRoot.appendChild(template.content.cloneNode(true));
//         this.shadowRoot.getElementById("inc").onclick = () => this.increment();
//         this.shadowRoot.getElementById("dec").onclick = () => this.decrement();
//         this.update(this.count)
//     }

//     increment() {
//       this.update(++this.count);
//     }
  
//     decrement() {
//       this.update(--this.count);
//     }

//     update(count) {
//         this.shadowRoot.getElementById("count").innerHTML = count;
//     }
// }

// 