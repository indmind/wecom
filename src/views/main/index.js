import store from 'Store/reducer';
// import actions from 'Store/actions';

import componentTemplate from 'Utils/componentTemplate';
import html from './template.html';
import style from './style.css';


const template = componentTemplate(html, style);

export default class MainView extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // store.dispatch(actions.fetchMealsByCategory());

    this.unsubscribe = () => { };
  }

  disconnectedCallback() {
    this.unsubscribe();
  }

  connectedCallback() {
    // TODO: do something on store change
    this.unsubscribe = store.subscribe(() => {});

    this.shadowRoot.getElementById('title-category').innerText = 'Wayahe balbalan';
  }
}

customElements.define('main-view', MainView);
