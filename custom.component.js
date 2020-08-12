const style = /*html*/ `
  <style>
    h1 {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
        'Segoe UI Symbol';
    }
  </style>
`;

const template = document.createElement('template');
template.innerHTML = /*template*/ `
  ${style}
  <h1>
    Custom Web Component
  </h1>
`;

class CustomComponent extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('custom-component', CustomComponent);
