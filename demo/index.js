import { LitElement, html } from '@polymer/lit-element';
import { i18next, LocalizeMixin, changeLang } from 'litelement-i18n-mixin';

//Import the strings
import es from './locales/es/common';
import en from './locales/en/common';


export default class MyComponent extends LocalizeMixin(LitElement) {
// export default class AA extends localizeMixin(LitElement) {
    static get properties() {
        return {
            prop1: String,
        };
    }

    //We must create a strings getter
    static get strings() {
        return {
            es,
            en,
        }
    }

    constructor() {
        super();
        this.prop1 = 'default-value';
    }

    _render({ prop1 }) {
        return html`
        <button on-click="${_ => changeLang('es')}">ES</button>
        <button on-click="${_ => changeLang('en')}">EN</button>
        <h2>Hello ${prop1}
            <h2>${i18next.t('my-component:title')}</h2>
        </h2>`;
    }
}

customElements.define('my-component', AA);
