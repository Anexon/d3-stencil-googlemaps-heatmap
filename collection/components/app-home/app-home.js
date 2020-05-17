import { Component, h } from '@stencil/core';
export class AppHome {
    render() {
        return (h("div", { class: 'app-home' },
            h("my-googlemap", null)));
    }
    static get is() { return "app-home"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["app-home.css"]
    }; }
    static get styleUrls() { return {
        "$": ["app-home.css"]
    }; }
}
