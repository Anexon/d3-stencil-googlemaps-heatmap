var __awaiter=this&&this.__awaiter||function(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function a(t){try{s(r.next(t))}catch(e){o(e)}}function u(t){try{s(r["throw"](t))}catch(e){o(e)}}function s(t){t.done?n(t.value):i(t.value).then(a,u)}s((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,a;return a={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function u(t){return function(e){return s([t,e])}}function s(a){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(o=a[0]&2?i["return"]:a[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;if(i=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;i=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){n.label=a[1];break}if(a[0]===6&&n.label<o[1]){n.label=o[1];o=a;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(a);break}if(o[2])n.ops.pop();n.trys.pop();continue}a=e.call(t,n)}catch(u){a=[6,u];i=0}finally{r=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-404054a5.system.js"],(function(t){"use strict";var e,n,r;return{setters:[function(t){e=t.r;n=t.h;r=t.g}],execute:function(){var i="initMap";var o=false;var a;var u;var s=new Promise((function(t,e){a=t;u=e}));function f(t){if(o)return s;o=true;window[i]=function(){return a()};var e=document.createElement("script");e.async=true;e.defer=true;e.src="https://maps.googleapis.com/maps/api/js?key="+t+"&callback="+i;e.onerror=u;document.querySelector("head").appendChild(e);return s}var c="http://www.w3.org/1999/xhtml";var l={svg:"http://www.w3.org/2000/svg",xhtml:c,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function h(t){var e=t+="",n=e.indexOf(":");if(n>=0&&(e=t.slice(0,n))!=="xmlns")t=t.slice(n+1);return l.hasOwnProperty(e)?{space:l[e],local:t}:t}function p(t){return function(){var e=this.ownerDocument,n=this.namespaceURI;return n===c&&e.documentElement.namespaceURI===c?e.createElement(t):e.createElementNS(n,t)}}function v(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function d(t){var e=h(t);return(e.local?v:p)(e)}function g(){}function y(t){return t==null?g:function(){return this.querySelector(t)}}function m(t){if(typeof t!=="function")t=y(t);for(var e=this._groups,n=e.length,r=new Array(n),i=0;i<n;++i){for(var o=e[i],a=o.length,u=r[i]=new Array(a),s,f,c=0;c<a;++c){if((s=o[c])&&(f=t.call(s,s.__data__,c,o))){if("__data__"in s)f.__data__=s.__data__;u[c]=f}}}return new Jt(r,this._parents)}function _(){return[]}function w(t){return t==null?_:function(){return this.querySelectorAll(t)}}function b(t){if(typeof t!=="function")t=w(t);for(var e=this._groups,n=e.length,r=[],i=[],o=0;o<n;++o){for(var a=e[o],u=a.length,s,f=0;f<u;++f){if(s=a[f]){r.push(t.call(s,s.__data__,f,a));i.push(s)}}}return new Jt(r,i)}function x(t){return function(){return this.matches(t)}}function A(t){if(typeof t!=="function")t=x(t);for(var e=this._groups,n=e.length,r=new Array(n),i=0;i<n;++i){for(var o=e[i],a=o.length,u=r[i]=[],s,f=0;f<a;++f){if((s=o[f])&&t.call(s,s.__data__,f,o)){u.push(s)}}}return new Jt(r,this._parents)}function D(t){return new Array(t.length)}function S(){return new Jt(this._enter||this._groups.map(D),this._parents)}function L(t,e){this.ownerDocument=t.ownerDocument;this.namespaceURI=t.namespaceURI;this._next=null;this._parent=t;this.__data__=e}L.prototype={constructor:L,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function E(t){return function(){return t}}var M="$";function C(t,e,n,r,i,o){var a=0,u,s=e.length,f=o.length;for(;a<f;++a){if(u=e[a]){u.__data__=o[a];r[a]=u}else{n[a]=new L(t,o[a])}}for(;a<s;++a){if(u=e[a]){i[a]=u}}}function N(t,e,n,r,i,o,a){var u,s,f={},c=e.length,l=o.length,h=new Array(c),p;for(u=0;u<c;++u){if(s=e[u]){h[u]=p=M+a.call(s,s.__data__,u,e);if(p in f){i[u]=s}else{f[p]=s}}}for(u=0;u<l;++u){p=M+a.call(t,o[u],u,o);if(s=f[p]){r[u]=s;s.__data__=o[u];f[p]=null}else{n[u]=new L(t,o[u])}}for(u=0;u<c;++u){if((s=e[u])&&f[h[u]]===s){i[u]=s}}}function P(t,e){if(!t){p=new Array(this.size()),f=-1;this.each((function(t){p[++f]=t}));return p}var n=e?N:C,r=this._parents,i=this._groups;if(typeof t!=="function")t=E(t);for(var o=i.length,a=new Array(o),u=new Array(o),s=new Array(o),f=0;f<o;++f){var c=r[f],l=i[f],h=l.length,p=t.call(c,c&&c.__data__,f,r),v=p.length,d=u[f]=new Array(v),g=a[f]=new Array(v),y=s[f]=new Array(h);n(c,l,d,g,y,p,e);for(var m=0,_=0,w,b;m<v;++m){if(w=d[m]){if(m>=_)_=m+1;while(!(b=g[_])&&++_<v);w._next=b||null}}}a=new Jt(a,r);a._enter=u;a._exit=s;return a}function B(){return new Jt(this._exit||this._groups.map(D),this._parents)}function R(t,e,n){var r=this.enter(),i=this,o=this.exit();r=typeof t==="function"?t(r):r.append(t+"");if(e!=null)i=e(i);if(n==null)o.remove();else n(o);return r&&i?r.merge(i).order():i}function I(t){for(var e=this._groups,n=t._groups,r=e.length,i=n.length,o=Math.min(r,i),a=new Array(r),u=0;u<o;++u){for(var s=e[u],f=n[u],c=s.length,l=a[u]=new Array(c),h,p=0;p<c;++p){if(h=s[p]||f[p]){l[p]=h}}}for(;u<r;++u){a[u]=e[u]}return new Jt(a,this._parents)}function j(){for(var t=this._groups,e=-1,n=t.length;++e<n;){for(var r=t[e],i=r.length-1,o=r[i],a;--i>=0;){if(a=r[i]){if(o&&a.compareDocumentPosition(o)^4)o.parentNode.insertBefore(a,o);o=a}}}return this}function k(t){if(!t)t=O;function e(e,n){return e&&n?t(e.__data__,n.__data__):!e-!n}for(var n=this._groups,r=n.length,i=new Array(r),o=0;o<r;++o){for(var a=n[o],u=a.length,s=i[o]=new Array(u),f,c=0;c<u;++c){if(f=a[c]){s[c]=f}}s.sort(e)}return new Jt(i,this._parents).order()}function O(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function q(){var t=arguments[0];arguments[0]=this;t.apply(null,arguments);return this}function H(){var t=new Array(this.size()),e=-1;this.each((function(){t[++e]=this}));return t}function T(){for(var t=this._groups,e=0,n=t.length;e<n;++e){for(var r=t[e],i=0,o=r.length;i<o;++i){var a=r[i];if(a)return a}}return null}function z(){var t=0;this.each((function(){++t}));return t}function W(){return!this.node()}function U(t){for(var e=this._groups,n=0,r=e.length;n<r;++n){for(var i=e[n],o=0,a=i.length,u;o<a;++o){if(u=i[o])t.call(u,u.__data__,o,i)}}return this}function V(t){return function(){this.removeAttribute(t)}}function G(t){return function(){this.removeAttributeNS(t.space,t.local)}}function X(t,e){return function(){this.setAttribute(t,e)}}function Y(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function $(t,e){return function(){var n=e.apply(this,arguments);if(n==null)this.removeAttribute(t);else this.setAttribute(t,n)}}function F(t,e){return function(){var n=e.apply(this,arguments);if(n==null)this.removeAttributeNS(t.space,t.local);else this.setAttributeNS(t.space,t.local,n)}}function J(t,e){var n=h(t);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((e==null?n.local?G:V:typeof e==="function"?n.local?F:$:n.local?Y:X)(n,e))}function K(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function Q(t){return function(){this.style.removeProperty(t)}}function Z(t,e,n){return function(){this.style.setProperty(t,e,n)}}function tt(t,e,n){return function(){var r=e.apply(this,arguments);if(r==null)this.style.removeProperty(t);else this.style.setProperty(t,r,n)}}function et(t,e,n){return arguments.length>1?this.each((e==null?Q:typeof e==="function"?tt:Z)(t,e,n==null?"":n)):nt(this.node(),t)}function nt(t,e){return t.style.getPropertyValue(e)||K(t).getComputedStyle(t,null).getPropertyValue(e)}function rt(t){return function(){delete this[t]}}function it(t,e){return function(){this[t]=e}}function ot(t,e){return function(){var n=e.apply(this,arguments);if(n==null)delete this[t];else this[t]=n}}function at(t,e){return arguments.length>1?this.each((e==null?rt:typeof e==="function"?ot:it)(t,e)):this.node()[t]}function ut(t){return t.trim().split(/^|\s+/)}function st(t){return t.classList||new ft(t)}function ft(t){this._node=t;this._names=ut(t.getAttribute("class")||"")}ft.prototype={add:function(t){var e=this._names.indexOf(t);if(e<0){this._names.push(t);this._node.setAttribute("class",this._names.join(" "))}},remove:function(t){var e=this._names.indexOf(t);if(e>=0){this._names.splice(e,1);this._node.setAttribute("class",this._names.join(" "))}},contains:function(t){return this._names.indexOf(t)>=0}};function ct(t,e){var n=st(t),r=-1,i=e.length;while(++r<i)n.add(e[r])}function lt(t,e){var n=st(t),r=-1,i=e.length;while(++r<i)n.remove(e[r])}function ht(t){return function(){ct(this,t)}}function pt(t){return function(){lt(this,t)}}function vt(t,e){return function(){(e.apply(this,arguments)?ct:lt)(this,t)}}function dt(t,e){var n=ut(t+"");if(arguments.length<2){var r=st(this.node()),i=-1,o=n.length;while(++i<o)if(!r.contains(n[i]))return false;return true}return this.each((typeof e==="function"?vt:e?ht:pt)(n,e))}function gt(){this.textContent=""}function yt(t){return function(){this.textContent=t}}function mt(t){return function(){var e=t.apply(this,arguments);this.textContent=e==null?"":e}}function _t(t){return arguments.length?this.each(t==null?gt:(typeof t==="function"?mt:yt)(t)):this.node().textContent}function wt(){this.innerHTML=""}function bt(t){return function(){this.innerHTML=t}}function xt(t){return function(){var e=t.apply(this,arguments);this.innerHTML=e==null?"":e}}function At(t){return arguments.length?this.each(t==null?wt:(typeof t==="function"?xt:bt)(t)):this.node().innerHTML}function Dt(){if(this.nextSibling)this.parentNode.appendChild(this)}function St(){return this.each(Dt)}function Lt(){if(this.previousSibling)this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Et(){return this.each(Lt)}function Mt(t){var e=typeof t==="function"?t:d(t);return this.select((function(){return this.appendChild(e.apply(this,arguments))}))}function Ct(){return null}function Nt(t,e){var n=typeof t==="function"?t:d(t),r=e==null?Ct:typeof e==="function"?e:y(e);return this.select((function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)}))}function Pt(){var t=this.parentNode;if(t)t.removeChild(this)}function Bt(){return this.each(Pt)}function Rt(){var t=this.cloneNode(false),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function It(){var t=this.cloneNode(true),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function jt(t){return this.select(t?It:Rt)}function kt(t){return arguments.length?this.property("__data__",t):this.node().__data__}var Ot={};if(typeof document!=="undefined"){var qt=document.documentElement;if(!("onmouseenter"in qt)){Ot={mouseenter:"mouseover",mouseleave:"mouseout"}}}function Ht(t,e,n){t=Tt(t,e,n);return function(e){var n=e.relatedTarget;if(!n||n!==this&&!(n.compareDocumentPosition(this)&8)){t.call(this,e)}}}function Tt(t,e,n){return function(r){try{t.call(this,this.__data__,e,n)}finally{}}}function zt(t){return t.trim().split(/^|\s+/).map((function(t){var e="",n=t.indexOf(".");if(n>=0)e=t.slice(n+1),t=t.slice(0,n);return{type:t,name:e}}))}function Wt(t){return function(){var e=this.__on;if(!e)return;for(var n=0,r=-1,i=e.length,o;n<i;++n){if(o=e[n],(!t.type||o.type===t.type)&&o.name===t.name){this.removeEventListener(o.type,o.listener,o.capture)}else{e[++r]=o}}if(++r)e.length=r;else delete this.__on}}function Ut(t,e,n){var r=Ot.hasOwnProperty(t.type)?Ht:Tt;return function(i,o,a){var u=this.__on,s,f=r(e,o,a);if(u)for(var c=0,l=u.length;c<l;++c){if((s=u[c]).type===t.type&&s.name===t.name){this.removeEventListener(s.type,s.listener,s.capture);this.addEventListener(s.type,s.listener=f,s.capture=n);s.value=e;return}}this.addEventListener(t.type,f,n);s={type:t.type,name:t.name,value:e,listener:f,capture:n};if(!u)this.__on=[s];else u.push(s)}}function Vt(t,e,n){var r=zt(t+""),i,o=r.length,a;if(arguments.length<2){var u=this.node().__on;if(u)for(var s=0,f=u.length,c;s<f;++s){for(i=0,c=u[s];i<o;++i){if((a=r[i]).type===c.type&&a.name===c.name){return c.value}}}return}u=e?Ut:Wt;if(n==null)n=false;for(i=0;i<o;++i)this.each(u(r[i],e,n));return this}function Gt(t,e,n){var r=K(t),i=r.CustomEvent;if(typeof i==="function"){i=new i(e,n)}else{i=r.document.createEvent("Event");if(n)i.initEvent(e,n.bubbles,n.cancelable),i.detail=n.detail;else i.initEvent(e,false,false)}t.dispatchEvent(i)}function Xt(t,e){return function(){return Gt(this,t,e)}}function Yt(t,e){return function(){return Gt(this,t,e.apply(this,arguments))}}function $t(t,e){return this.each((typeof e==="function"?Yt:Xt)(t,e))}var Ft=[null];function Jt(t,e){this._groups=t;this._parents=e}function Kt(){return new Jt([[document.documentElement]],Ft)}Jt.prototype=Kt.prototype={constructor:Jt,select:m,selectAll:b,filter:A,data:P,enter:S,exit:B,join:R,merge:I,order:j,sort:k,call:q,nodes:H,node:T,size:z,empty:W,each:U,attr:J,style:et,property:at,classed:dt,text:_t,html:At,raise:St,lower:Et,append:Mt,insert:Nt,remove:Bt,clone:jt,datum:kt,on:Vt,dispatch:$t};function Qt(t){return typeof t==="string"?new Jt([[document.querySelector(t)]],[document.documentElement]):new Jt([[t]],Ft)}var Zt="$";function te(){}te.prototype=ee.prototype={constructor:te,has:function(t){return Zt+t in this},get:function(t){return this[Zt+t]},set:function(t,e){this[Zt+t]=e;return this},remove:function(t){var e=Zt+t;return e in this&&delete this[e]},clear:function(){for(var t in this)if(t[0]===Zt)delete this[t]},keys:function(){var t=[];for(var e in this)if(e[0]===Zt)t.push(e.slice(1));return t},values:function(){var t=[];for(var e in this)if(e[0]===Zt)t.push(this[e]);return t},entries:function(){var t=[];for(var e in this)if(e[0]===Zt)t.push({key:e.slice(1),value:this[e]});return t},size:function(){var t=0;for(var e in this)if(e[0]===Zt)++t;return t},empty:function(){for(var t in this)if(t[0]===Zt)return false;return true},each:function(t){for(var e in this)if(e[0]===Zt)t(this[e],e.slice(1),this)}};function ee(t,e){var n=new te;if(t instanceof te)t.each((function(t,e){n.set(e,t)}));else if(Array.isArray(t)){var r=-1,i=t.length,o;if(e==null)while(++r<i)n.set(r,t[r]);else while(++r<i)n.set(e(o=t[r],r,t),o)}else if(t)for(var a in t)n.set(a,t[a]);return n}var ne=".map{width:1200px;height:600px}";var re=t("my_googlemap",function(){function t(t){e(this,t)}t.prototype.componentDidRender=function(){return __awaiter(this,void 0,void 0,(function(){var t,e;var n=this;return __generator(this,(function(r){switch(r.label){case 0:return[4,f("AIzaSyAjigXRm-xmYiNyOoLMB2p1UmtauinyAy0")];case 1:r.sent();t=this;return[4,fetch("./assets/datasets/points-location.json").then((function(t){return t.json()}))];case 2:t.pointsLocation=r.sent();this.map=new google.maps.Map(this.el.shadowRoot.querySelector(".map"),{zoom:5,center:new google.maps.LatLng(40.4165,-3.70256),mapTypeId:google.maps.MapTypeId.TERRAIN});e=new google.maps.OverlayView;e.onAdd=function(){n.originalBounds=n.map.getBounds();n.canvas=Qt(e.getPanes().overlayLayer).append("canvas").style("position","absolute").style("left","-"+n.map.getDiv().offsetWidth/2+"px").style("top","-"+n.map.getDiv().offsetHeight/2+"px").attr("width",n.map.getDiv().offsetWidth).attr("height",n.map.getDiv().offsetHeight);var t=n.canvas.node().getContext("2d");t.translate(n.map.getDiv().offsetWidth/2,n.map.getDiv().offsetHeight/2);var r=n.generateColorGradient();var i=n.originalBounds.getNorthEast(),o=n.originalBounds.getSouthWest(),a=o.lng(),u=i.lng(),s=i.lat(),f=n.getDistance(new google.maps.LatLng(a,s),new google.maps.LatLng(u,s))/n.map.getDiv().offsetWidth,c=n.generateBrushes(ee(n.pointsLocation,(function(t){return Math.round(t.radius)})).keys(),f);e.draw=function(){n.projection=e.getProjection();t.save();t.clearRect(-n.map.getDiv().offsetWidth/2,-n.map.getDiv().offsetHeight/2,n.map.getDiv().offsetWidth,n.map.getDiv().offsetHeight);n.drawCircles(t,c);var i=t.getImageData(0,0,n.map.getDiv().offsetWidth,n.map.getDiv().offsetHeight);n.colorize(i.data,r);t.putImageData(i,0,0);t.restore()}};e.setMap(this.map);return[2]}}))}))};t.prototype.generateColorGradient=function(){var t={.4:"blue",.6:"cyan",.7:"lime",.8:"yellow",1:"red"};var e=document.createElement("canvas"),n=e.getContext("2d"),r=n.createLinearGradient(0,0,0,256);e.width=1;e.height=256;for(var i in t){r.addColorStop(+i,t[i])}n.fillStyle=r;n.fillRect(0,0,1,256);return n.getImageData(0,0,1,256).data};t.prototype.colorize=function(t,e){for(var n=0,r=t.length,i;n<r;n+=4){i=t[n+3]*4;if(i){t[n]=e[i];t[n+1]=e[i+1];t[n+2]=e[i+2]}}};t.prototype.drawCircles=function(t,e){var n=this;this.pointsLocation.forEach((function(r){t.globalAlpha=.1;var i=n.projection.fromLatLngToDivPixel(new google.maps.LatLng(r.latitude,r.longitude));var o=e[r.radius];t.drawImage(o.brush,i.x-o.radius,i.y-o.radius)}))};t.prototype.generateBrushes=function(t,e){var n={};t.forEach((function(t){var r=Math.round(t*3/4/e);var i=Math.round(t/4/e);var o=r+i;var a=document.createElement("canvas");var u=a.getContext("2d");a.width=a.height=o*2;u.shadowOffsetX=u.shadowOffsetY=o*2;u.shadowBlur=r;u.shadowColor="black";u.beginPath();u.arc(-o,-o,i,0,Math.PI*2);u.closePath();u.fill();n[t]={brush:a,radius:o}}));return n};t.prototype.getDistance=function(t,e){var n=6378137;var r=this.toRad(e.lat()-t.lat());var i=this.toRad(e.lng()-t.lng());var o=Math.sin(r/2)*Math.sin(r/2)+Math.cos(this.toRad(t.lat()))*Math.cos(this.toRad(e.lat()))*Math.sin(i/2)*Math.sin(i/2);var a=2*Math.atan2(Math.sqrt(o),Math.sqrt(1-o));var u=n*a;return u/1e3};t.prototype.toRad=function(t){return t*Math.PI/180};t.prototype.render=function(){return n("div",null,n("div",{class:"map"}))};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:true,configurable:true});return t}());re.style=ne}}}));