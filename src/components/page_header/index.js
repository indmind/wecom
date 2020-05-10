import componentTemplate from 'Utils/componentTemplate';

import html from './template.html';
import style from './style.css';


const template = componentTemplate(html, style);

class PageHeader extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    window.addEventListener('scroll', () => {
      if (window.innerWidth > 665) {
        if (window.scrollY > 70) {
          this.shadowRoot.getElementById('page-header').classList.add('hanging');
        } else {
          this.shadowRoot.getElementById('page-header').classList.remove('hanging');
        }
      }
    });
  }
}

customElements.define('page-header', PageHeader);
