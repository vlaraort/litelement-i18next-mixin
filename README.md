# litelement-18next-mixin

Mixin to allow to use easily the i18next library in any litelement webcomponent.

This mixin allows to store local strings anywhere, and lazy load them in your component, with hot reload.

It relies in localStorage to persists the selection of the language.

## Sample

There is a working demo inside the `/demo` folder
## Installing

`npm i -S litelement-i18next-mixin`

## Usage

Add the mixin import

```javascript
import { i18next, LocalizeMixin, changeLang } from 'litelement-i18n-mixin';
```

Extend your component

```javascript
export default class MyComponent extends LocalizeMixin(LitElement) {
```

Import the strings

```javascript
import es from './locales/es/common';
import en from './locales/en/common';
```

Create a getter

```javascript
static get strings() {
    return {
        es,
        en,
    }
}
```
Use them in your template

```javascript
_render({ prop1 }) {
    return html`
    <h2>${i18next.t('my-component:title')}</h2>
    `;
}
```
## Functions

`changeLang(lang)`: Changes the language to the parameter, sets the app language and lazy loads the file for that language  

## ToDo

- Allow to use strings from external APIs
- Test
