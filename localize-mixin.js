import i18next from './init';
import { addResource, initializeStrings } from './language';

let _i18nextInitialized = false;

export const localizeMixin = Base => class localizeMixinElement extends Base {
    _shouldRender(props, changedProps, old) {
        return changedProps && changedProps.active
            ? props.active && _i18nextInitialized
            : _i18nextInitialized;
    }

    connectedCallback() {
        const ns = this.localName;
        if (!_i18nextInitialized) {
            i18next.on('initialized', (options) => {
                _i18nextInitialized = true;
                this.requestRender();
            });
        }

        i18next.on('languageChanged', (lang) => {
            addResource(lang, ns, this.constructor.strings);
            this.requestRender();
        });

        if (super.connectedCallback) {
            super.connectedCallback();
        }

        initializeStrings(ns, this.constructor.strings);
    }

    disconnectedCallback() {
        // ToDo: Remove resources
    }
};

export default localizeMixin;
