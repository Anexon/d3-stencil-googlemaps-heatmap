import { r as registerInstance, h } from './index-96f926c6.js';
var appHomeCss = ".app-home{padding:10px}button{background:#5851ff;color:white;margin:8px;border:none;font-size:13px;font-weight:700;text-transform:uppercase;padding:16px 20px;border-radius:2px;-webkit-box-shadow:0 8px 16px rgba(0,0,0,.1), 0 3px 6px rgba(0,0,0,.08);box-shadow:0 8px 16px rgba(0,0,0,.1), 0 3px 6px rgba(0,0,0,.08);outline:0;letter-spacing:.04em;-webkit-transition:all .15s ease;transition:all .15s ease;cursor:pointer}button:hover{-webkit-box-shadow:0 3px 6px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.1);box-shadow:0 3px 6px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.1);-webkit-transform:translateY(1px);transform:translateY(1px)}";
var AppHome = /** @class */ (function () {
    function AppHome(hostRef) {
        registerInstance(this, hostRef);
    }
    AppHome.prototype.render = function () {
        return (h("div", { class: 'app-home' }, h("my-googlemap", null)));
    };
    return AppHome;
}());
AppHome.style = appHomeCss;
export { AppHome as app_home };
