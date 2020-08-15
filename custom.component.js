class CustomComponent extends HTMLElement {
  _style = document.createElement('style');
  _template = document.createElement('template');

  constructor() {
    super();

    this._defineStyle();
    this._defineTemplate();
    this._attachToShadowDOM();
  }

  _defineStyle() {
    this._style.innerHTML = `
    h1 {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
        'Segoe UI Symbol';
    }
    `;
  }

  _defineTemplate() {
    this._template.innerHTML = `
  <h1>
    Custom Web Component
  </h1>
`;
  }

  _attachToShadowDOM() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(this._style);
    this.shadowRoot.appendChild(this._template.content.cloneNode(true));
  }
}

customElements.define('custom-component', CustomComponent);
