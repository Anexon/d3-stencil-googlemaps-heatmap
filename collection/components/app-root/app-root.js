import { Component, h } from '@stencil/core';
export class AppRoot {
    render() {
        return (h("div", null,
            h("header", null,
                h("h1", null, "GoogleMaps + Canvas - Heatmap"),
                h("span", null, "(Multiple Radius)")),
            h("main", null,
                h("stencil-router", null,
                    h("stencil-route-switch", { scrollTopOffset: 0 },
                        h("stencil-route", { url: '/', component: 'app-home', exact: true }))))));
    }
    static get is() { return "app-root"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["app-root.css"]
    }; }
    static get styleUrls() { return {
        "$": ["app-root.css"]
    }; }
}
