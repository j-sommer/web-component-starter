fetch('custom.component.html')
  .then((stream) => stream.text())
  .then((html) => defineCustomComponent(html));

function defineCustomComponent(html) {
  class CustomComponent extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: 'open' });

      shadowRoot.innerHTML = html;
    }
  }

  customElements.define('custom-component', CustomComponent);
}
