var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, h, g as getElement } from './index-96f926c6.js';
var CALLBACK = 'initMap';
// @ts-ignore
var initialized = false;
var resolveInit;
var rejectInit;
var initPromise = new Promise(function (resolve, reject) {
    resolveInit = resolve;
    rejectInit = reject;
});
function gmapsInit(apiKey) {
    if (initialized)
        return initPromise;
    initialized = true;
    window[CALLBACK] = function () { return resolveInit(); };
    var script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.src = "https://maps.googleapis.com/maps/api/js?key=" + apiKey + "&callback=" + CALLBACK;
    script.onerror = rejectInit;
    document.querySelector('head').appendChild(script);
    return initPromise;
}
var xhtml = "http://www.w3.org/1999/xhtml";
var namespaces = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: xhtml,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
};
function namespace(name) {
    var prefix = name += "", i = prefix.indexOf(":");
    if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns")
        name = name.slice(i + 1);
    return namespaces.hasOwnProperty(prefix) ? { space: namespaces[prefix], local: name } : name;
}
function creatorInherit(name) {
    return function () {
        var document = this.ownerDocument, uri = this.namespaceURI;
        return uri === xhtml && document.documentElement.namespaceURI === xhtml
            ? document.createElement(name)
            : document.createElementNS(uri, name);
    };
}
function creatorFixed(fullname) {
    return function () {
        return this.ownerDocument.createElementNS(fullname.space, fullname.local);
    };
}
function creator(name) {
    var fullname = namespace(name);
    return (fullname.local
        ? creatorFixed
        : creatorInherit)(fullname);
}
function none() { }
function selector(selector) {
    return selector == null ? none : function () {
        return this.querySelector(selector);
    };
}
function selection_select(select) {
    if (typeof select !== "function")
        select = selector(select);
    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
        for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
            if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
                if ("__data__" in node)
                    subnode.__data__ = node.__data__;
                subgroup[i] = subnode;
            }
        }
    }
    return new Selection(subgroups, this._parents);
}
function empty() {
    return [];
}
function selectorAll(selector) {
    return selector == null ? empty : function () {
        return this.querySelectorAll(selector);
    };
}
function selection_selectAll(select) {
    if (typeof select !== "function")
        select = selectorAll(select);
    for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
        for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
            if (node = group[i]) {
                subgroups.push(select.call(node, node.__data__, i, group));
                parents.push(node);
            }
        }
    }
    return new Selection(subgroups, parents);
}
function matcher(selector) {
    return function () {
        return this.matches(selector);
    };
}
function selection_filter(match) {
    if (typeof match !== "function")
        match = matcher(match);
    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
        for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
            if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
                subgroup.push(node);
            }
        }
    }
    return new Selection(subgroups, this._parents);
}
function sparse(update) {
    return new Array(update.length);
}
function selection_enter() {
    return new Selection(this._enter || this._groups.map(sparse), this._parents);
}
function EnterNode(parent, datum) {
    this.ownerDocument = parent.ownerDocument;
    this.namespaceURI = parent.namespaceURI;
    this._next = null;
    this._parent = parent;
    this.__data__ = datum;
}
EnterNode.prototype = {
    constructor: EnterNode,
    appendChild: function (child) { return this._parent.insertBefore(child, this._next); },
    insertBefore: function (child, next) { return this._parent.insertBefore(child, next); },
    querySelector: function (selector) { return this._parent.querySelector(selector); },
    querySelectorAll: function (selector) { return this._parent.querySelectorAll(selector); }
};
function constant(x) {
    return function () {
        return x;
    };
}
var keyPrefix = "$"; // Protect against keys like “__proto__”.
function bindIndex(parent, group, enter, update, exit, data) {
    var i = 0, node, groupLength = group.length, dataLength = data.length;
    // Put any non-null nodes that fit into update.
    // Put any null nodes into enter.
    // Put any remaining data into enter.
    for (; i < dataLength; ++i) {
        if (node = group[i]) {
            node.__data__ = data[i];
            update[i] = node;
        }
        else {
            enter[i] = new EnterNode(parent, data[i]);
        }
    }
    // Put any non-null nodes that don’t fit into exit.
    for (; i < groupLength; ++i) {
        if (node = group[i]) {
            exit[i] = node;
        }
    }
}
function bindKey(parent, group, enter, update, exit, data, key) {
    var i, node, nodeByKeyValue = {}, groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
    // Compute the key for each node.
    // If multiple nodes have the same key, the duplicates are added to exit.
    for (i = 0; i < groupLength; ++i) {
        if (node = group[i]) {
            keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
            if (keyValue in nodeByKeyValue) {
                exit[i] = node;
            }
            else {
                nodeByKeyValue[keyValue] = node;
            }
        }
    }
    // Compute the key for each datum.
    // If there a node associated with this key, join and add it to update.
    // If there is not (or the key is a duplicate), add it to enter.
    for (i = 0; i < dataLength; ++i) {
        keyValue = keyPrefix + key.call(parent, data[i], i, data);
        if (node = nodeByKeyValue[keyValue]) {
            update[i] = node;
            node.__data__ = data[i];
            nodeByKeyValue[keyValue] = null;
        }
        else {
            enter[i] = new EnterNode(parent, data[i]);
        }
    }
    // Add any remaining nodes that were not bound to data to exit.
    for (i = 0; i < groupLength; ++i) {
        if ((node = group[i]) && (nodeByKeyValue[keyValues[i]] === node)) {
            exit[i] = node;
        }
    }
}
function selection_data(value, key) {
    if (!value) {
        data = new Array(this.size()), j = -1;
        this.each(function (d) { data[++j] = d; });
        return data;
    }
    var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
    if (typeof value !== "function")
        value = constant(value);
    for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
        var parent = parents[j], group = groups[j], groupLength = group.length, data = value.call(parent, parent && parent.__data__, j, parents), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
        bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
        // Now connect the enter nodes to their following update node, such that
        // appendChild can insert the materialized enter node before this node,
        // rather than at the end of the parent node.
        for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
            if (previous = enterGroup[i0]) {
                if (i0 >= i1)
                    i1 = i0 + 1;
                while (!(next = updateGroup[i1]) && ++i1 < dataLength)
                    ;
                previous._next = next || null;
            }
        }
    }
    update = new Selection(update, parents);
    update._enter = enter;
    update._exit = exit;
    return update;
}
function selection_exit() {
    return new Selection(this._exit || this._groups.map(sparse), this._parents);
}
function selection_join(onenter, onupdate, onexit) {
    var enter = this.enter(), update = this, exit = this.exit();
    enter = typeof onenter === "function" ? onenter(enter) : enter.append(onenter + "");
    if (onupdate != null)
        update = onupdate(update);
    if (onexit == null)
        exit.remove();
    else
        onexit(exit);
    return enter && update ? enter.merge(update).order() : update;
}
function selection_merge(selection) {
    for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
        for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
            if (node = group0[i] || group1[i]) {
                merge[i] = node;
            }
        }
    }
    for (; j < m0; ++j) {
        merges[j] = groups0[j];
    }
    return new Selection(merges, this._parents);
}
function selection_order() {
    for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
        for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
            if (node = group[i]) {
                if (next && node.compareDocumentPosition(next) ^ 4)
                    next.parentNode.insertBefore(node, next);
                next = node;
            }
        }
    }
    return this;
}
function selection_sort(compare) {
    if (!compare)
        compare = ascending;
    function compareNode(a, b) {
        return a && b ? compare(a.__data__, b.__data__) : !a - !b;
    }
    for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
        for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
            if (node = group[i]) {
                sortgroup[i] = node;
            }
        }
        sortgroup.sort(compareNode);
    }
    return new Selection(sortgroups, this._parents).order();
}
function ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}
function selection_call() {
    var callback = arguments[0];
    arguments[0] = this;
    callback.apply(null, arguments);
    return this;
}
function selection_nodes() {
    var nodes = new Array(this.size()), i = -1;
    this.each(function () { nodes[++i] = this; });
    return nodes;
}
function selection_node() {
    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
        for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
            var node = group[i];
            if (node)
                return node;
        }
    }
    return null;
}
function selection_size() {
    var size = 0;
    this.each(function () { ++size; });
    return size;
}
function selection_empty() {
    return !this.node();
}
function selection_each(callback) {
    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
        for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
            if (node = group[i])
                callback.call(node, node.__data__, i, group);
        }
    }
    return this;
}
function attrRemove(name) {
    return function () {
        this.removeAttribute(name);
    };
}
function attrRemoveNS(fullname) {
    return function () {
        this.removeAttributeNS(fullname.space, fullname.local);
    };
}
function attrConstant(name, value) {
    return function () {
        this.setAttribute(name, value);
    };
}
function attrConstantNS(fullname, value) {
    return function () {
        this.setAttributeNS(fullname.space, fullname.local, value);
    };
}
function attrFunction(name, value) {
    return function () {
        var v = value.apply(this, arguments);
        if (v == null)
            this.removeAttribute(name);
        else
            this.setAttribute(name, v);
    };
}
function attrFunctionNS(fullname, value) {
    return function () {
        var v = value.apply(this, arguments);
        if (v == null)
            this.removeAttributeNS(fullname.space, fullname.local);
        else
            this.setAttributeNS(fullname.space, fullname.local, v);
    };
}
function selection_attr(name, value) {
    var fullname = namespace(name);
    if (arguments.length < 2) {
        var node = this.node();
        return fullname.local
            ? node.getAttributeNS(fullname.space, fullname.local)
            : node.getAttribute(fullname);
    }
    return this.each((value == null
        ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
        ? (fullname.local ? attrFunctionNS : attrFunction)
        : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
}
function defaultView(node) {
    return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
        || (node.document && node) // node is a Window
        || node.defaultView; // node is a Document
}
function styleRemove(name) {
    return function () {
        this.style.removeProperty(name);
    };
}
function styleConstant(name, value, priority) {
    return function () {
        this.style.setProperty(name, value, priority);
    };
}
function styleFunction(name, value, priority) {
    return function () {
        var v = value.apply(this, arguments);
        if (v == null)
            this.style.removeProperty(name);
        else
            this.style.setProperty(name, v, priority);
    };
}
function selection_style(name, value, priority) {
    return arguments.length > 1
        ? this.each((value == null
            ? styleRemove : typeof value === "function"
            ? styleFunction
            : styleConstant)(name, value, priority == null ? "" : priority))
        : styleValue(this.node(), name);
}
function styleValue(node, name) {
    return node.style.getPropertyValue(name)
        || defaultView(node).getComputedStyle(node, null).getPropertyValue(name);
}
function propertyRemove(name) {
    return function () {
        delete this[name];
    };
}
function propertyConstant(name, value) {
    return function () {
        this[name] = value;
    };
}
function propertyFunction(name, value) {
    return function () {
        var v = value.apply(this, arguments);
        if (v == null)
            delete this[name];
        else
            this[name] = v;
    };
}
function selection_property(name, value) {
    return arguments.length > 1
        ? this.each((value == null
            ? propertyRemove : typeof value === "function"
            ? propertyFunction
            : propertyConstant)(name, value))
        : this.node()[name];
}
function classArray(string) {
    return string.trim().split(/^|\s+/);
}
function classList(node) {
    return node.classList || new ClassList(node);
}
function ClassList(node) {
    this._node = node;
    this._names = classArray(node.getAttribute("class") || "");
}
ClassList.prototype = {
    add: function (name) {
        var i = this._names.indexOf(name);
        if (i < 0) {
            this._names.push(name);
            this._node.setAttribute("class", this._names.join(" "));
        }
    },
    remove: function (name) {
        var i = this._names.indexOf(name);
        if (i >= 0) {
            this._names.splice(i, 1);
            this._node.setAttribute("class", this._names.join(" "));
        }
    },
    contains: function (name) {
        return this._names.indexOf(name) >= 0;
    }
};
function classedAdd(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while (++i < n)
        list.add(names[i]);
}
function classedRemove(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while (++i < n)
        list.remove(names[i]);
}
function classedTrue(names) {
    return function () {
        classedAdd(this, names);
    };
}
function classedFalse(names) {
    return function () {
        classedRemove(this, names);
    };
}
function classedFunction(names, value) {
    return function () {
        (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
    };
}
function selection_classed(name, value) {
    var names = classArray(name + "");
    if (arguments.length < 2) {
        var list = classList(this.node()), i = -1, n = names.length;
        while (++i < n)
            if (!list.contains(names[i]))
                return false;
        return true;
    }
    return this.each((typeof value === "function"
        ? classedFunction : value
        ? classedTrue
        : classedFalse)(names, value));
}
function textRemove() {
    this.textContent = "";
}
function textConstant(value) {
    return function () {
        this.textContent = value;
    };
}
function textFunction(value) {
    return function () {
        var v = value.apply(this, arguments);
        this.textContent = v == null ? "" : v;
    };
}
function selection_text(value) {
    return arguments.length
        ? this.each(value == null
            ? textRemove : (typeof value === "function"
            ? textFunction
            : textConstant)(value))
        : this.node().textContent;
}
function htmlRemove() {
    this.innerHTML = "";
}
function htmlConstant(value) {
    return function () {
        this.innerHTML = value;
    };
}
function htmlFunction(value) {
    return function () {
        var v = value.apply(this, arguments);
        this.innerHTML = v == null ? "" : v;
    };
}
function selection_html(value) {
    return arguments.length
        ? this.each(value == null
            ? htmlRemove : (typeof value === "function"
            ? htmlFunction
            : htmlConstant)(value))
        : this.node().innerHTML;
}
function raise() {
    if (this.nextSibling)
        this.parentNode.appendChild(this);
}
function selection_raise() {
    return this.each(raise);
}
function lower() {
    if (this.previousSibling)
        this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function selection_lower() {
    return this.each(lower);
}
function selection_append(name) {
    var create = typeof name === "function" ? name : creator(name);
    return this.select(function () {
        return this.appendChild(create.apply(this, arguments));
    });
}
function constantNull() {
    return null;
}
function selection_insert(name, before) {
    var create = typeof name === "function" ? name : creator(name), select = before == null ? constantNull : typeof before === "function" ? before : selector(before);
    return this.select(function () {
        return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
    });
}
function remove() {
    var parent = this.parentNode;
    if (parent)
        parent.removeChild(this);
}
function selection_remove() {
    return this.each(remove);
}
function selection_cloneShallow() {
    var clone = this.cloneNode(false), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_cloneDeep() {
    var clone = this.cloneNode(true), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_clone(deep) {
    return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}
function selection_datum(value) {
    return arguments.length
        ? this.property("__data__", value)
        : this.node().__data__;
}
var filterEvents = {};
if (typeof document !== "undefined") {
    var element = document.documentElement;
    if (!("onmouseenter" in element)) {
        filterEvents = { mouseenter: "mouseover", mouseleave: "mouseout" };
    }
}
function filterContextListener(listener, index, group) {
    listener = contextListener(listener, index, group);
    return function (event) {
        var related = event.relatedTarget;
        if (!related || (related !== this && !(related.compareDocumentPosition(this) & 8))) {
            listener.call(this, event);
        }
    };
}
function contextListener(listener, index, group) {
    return function (event1) {
        try {
            listener.call(this, this.__data__, index, group);
        }
        finally {
        }
    };
}
function parseTypenames(typenames) {
    return typenames.trim().split(/^|\s+/).map(function (t) {
        var name = "", i = t.indexOf(".");
        if (i >= 0)
            name = t.slice(i + 1), t = t.slice(0, i);
        return { type: t, name: name };
    });
}
function onRemove(typename) {
    return function () {
        var on = this.__on;
        if (!on)
            return;
        for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
            if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
                this.removeEventListener(o.type, o.listener, o.capture);
            }
            else {
                on[++i] = o;
            }
        }
        if (++i)
            on.length = i;
        else
            delete this.__on;
    };
}
function onAdd(typename, value, capture) {
    var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
    return function (d, i, group) {
        var on = this.__on, o, listener = wrap(value, i, group);
        if (on)
            for (var j = 0, m = on.length; j < m; ++j) {
                if ((o = on[j]).type === typename.type && o.name === typename.name) {
                    this.removeEventListener(o.type, o.listener, o.capture);
                    this.addEventListener(o.type, o.listener = listener, o.capture = capture);
                    o.value = value;
                    return;
                }
            }
        this.addEventListener(typename.type, listener, capture);
        o = { type: typename.type, name: typename.name, value: value, listener: listener, capture: capture };
        if (!on)
            this.__on = [o];
        else
            on.push(o);
    };
}
function selection_on(typename, value, capture) {
    var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;
    if (arguments.length < 2) {
        var on = this.node().__on;
        if (on)
            for (var j = 0, m = on.length, o; j < m; ++j) {
                for (i = 0, o = on[j]; i < n; ++i) {
                    if ((t = typenames[i]).type === o.type && t.name === o.name) {
                        return o.value;
                    }
                }
            }
        return;
    }
    on = value ? onAdd : onRemove;
    if (capture == null)
        capture = false;
    for (i = 0; i < n; ++i)
        this.each(on(typenames[i], value, capture));
    return this;
}
function dispatchEvent(node, type, params) {
    var window = defaultView(node), event = window.CustomEvent;
    if (typeof event === "function") {
        event = new event(type, params);
    }
    else {
        event = window.document.createEvent("Event");
        if (params)
            event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
        else
            event.initEvent(type, false, false);
    }
    node.dispatchEvent(event);
}
function dispatchConstant(type, params) {
    return function () {
        return dispatchEvent(this, type, params);
    };
}
function dispatchFunction(type, params) {
    return function () {
        return dispatchEvent(this, type, params.apply(this, arguments));
    };
}
function selection_dispatch(type, params) {
    return this.each((typeof params === "function"
        ? dispatchFunction
        : dispatchConstant)(type, params));
}
var root = [null];
function Selection(groups, parents) {
    this._groups = groups;
    this._parents = parents;
}
function selection() {
    return new Selection([[document.documentElement]], root);
}
Selection.prototype = selection.prototype = {
    constructor: Selection,
    select: selection_select,
    selectAll: selection_selectAll,
    filter: selection_filter,
    data: selection_data,
    enter: selection_enter,
    exit: selection_exit,
    join: selection_join,
    merge: selection_merge,
    order: selection_order,
    sort: selection_sort,
    call: selection_call,
    nodes: selection_nodes,
    node: selection_node,
    size: selection_size,
    empty: selection_empty,
    each: selection_each,
    attr: selection_attr,
    style: selection_style,
    property: selection_property,
    classed: selection_classed,
    text: selection_text,
    html: selection_html,
    raise: selection_raise,
    lower: selection_lower,
    append: selection_append,
    insert: selection_insert,
    remove: selection_remove,
    clone: selection_clone,
    datum: selection_datum,
    on: selection_on,
    dispatch: selection_dispatch
};
function select(selector) {
    return typeof selector === "string"
        ? new Selection([[document.querySelector(selector)]], [document.documentElement])
        : new Selection([[selector]], root);
}
var prefix = "$";
function Map() { }
Map.prototype = map.prototype = {
    constructor: Map,
    has: function (key) {
        return (prefix + key) in this;
    },
    get: function (key) {
        return this[prefix + key];
    },
    set: function (key, value) {
        this[prefix + key] = value;
        return this;
    },
    remove: function (key) {
        var property = prefix + key;
        return property in this && delete this[property];
    },
    clear: function () {
        for (var property in this)
            if (property[0] === prefix)
                delete this[property];
    },
    keys: function () {
        var keys = [];
        for (var property in this)
            if (property[0] === prefix)
                keys.push(property.slice(1));
        return keys;
    },
    values: function () {
        var values = [];
        for (var property in this)
            if (property[0] === prefix)
                values.push(this[property]);
        return values;
    },
    entries: function () {
        var entries = [];
        for (var property in this)
            if (property[0] === prefix)
                entries.push({ key: property.slice(1), value: this[property] });
        return entries;
    },
    size: function () {
        var size = 0;
        for (var property in this)
            if (property[0] === prefix)
                ++size;
        return size;
    },
    empty: function () {
        for (var property in this)
            if (property[0] === prefix)
                return false;
        return true;
    },
    each: function (f) {
        for (var property in this)
            if (property[0] === prefix)
                f(this[property], property.slice(1), this);
    }
};
function map(object, f) {
    var map = new Map;
    // Copy constructor.
    if (object instanceof Map)
        object.each(function (value, key) { map.set(key, value); });
    // Index array by numeric index or specified key function.
    else if (Array.isArray(object)) {
        var i = -1, n = object.length, o;
        if (f == null)
            while (++i < n)
                map.set(i, object[i]);
        else
            while (++i < n)
                map.set(f(o = object[i], i, object), o);
    }
    // Convert object to map.
    else if (object)
        for (var key in object)
            map.set(key, object[key]);
    return map;
}
var myGooglemapCss = ".map{width:1200px;height:600px}";
var AppHome = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
    }
    class_1.prototype.componentDidRender = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, overlay;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, gmapsInit("AIzaSyAjigXRm-xmYiNyOoLMB2p1UmtauinyAy0")];
                    case 1:
                        _b.sent();
                        _a = this;
                        return [4 /*yield*/, fetch("./assets/datasets/points-location.json").then(function (res) { return res.json(); })];
                    case 2:
                        _a.pointsLocation = _b.sent();
                        this.map = new google.maps.Map(this.el.shadowRoot.querySelector('.map'), {
                            zoom: 5,
                            center: new google.maps.LatLng(40.4165000, -3.7025600),
                            mapTypeId: google.maps.MapTypeId.TERRAIN
                        });
                        overlay = new google.maps.OverlayView();
                        overlay.onAdd = function () {
                            _this.originalBounds = _this.map.getBounds();
                            _this.canvas = select(overlay.getPanes().overlayLayer)
                                .append('canvas')
                                .style('position', 'absolute')
                                .style('left', "-" + _this.map.getDiv().offsetWidth / 2 + "px")
                                .style('top', "-" + _this.map.getDiv().offsetHeight / 2 + "px")
                                .attr('width', _this.map.getDiv().offsetWidth)
                                .attr('height', _this.map.getDiv().offsetHeight);
                            var ctx = _this.canvas.node().getContext("2d");
                            ctx.translate(_this.map.getDiv().offsetWidth / 2, _this.map.getDiv().offsetHeight / 2);
                            var colorGradient = _this.generateColorGradient();
                            var ne = _this.originalBounds.getNorthEast(), sw = _this.originalBounds.getSouthWest(), mapX1 = sw.lng(), mapX2 = ne.lng(), mapY1 = ne.lat(), kmXStep = _this.getDistance(new google.maps.LatLng(mapX1, mapY1), new google.maps.LatLng(mapX2, mapY1)) / _this.map.getDiv().offsetWidth, brushes = _this.generateBrushes(map(_this.pointsLocation, function (d) { return Math.round(d.radius); }).keys(), kmXStep);
                            overlay.draw = function () {
                                _this.projection = overlay.getProjection();
                                ctx.save();
                                ctx.clearRect(-_this.map.getDiv().offsetWidth / 2, -_this.map.getDiv().offsetHeight / 2, _this.map.getDiv().offsetWidth, _this.map.getDiv().offsetHeight);
                                _this.drawCircles(ctx, brushes);
                                var image = ctx.getImageData(0, 0, _this.map.getDiv().offsetWidth, _this.map.getDiv().offsetHeight);
                                _this.colorize(image.data, colorGradient);
                                ctx.putImageData(image, 0, 0);
                                ctx.restore();
                            };
                        };
                        overlay.setMap(this.map);
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.generateColorGradient = function () {
        var grad = {
            0.4: 'blue',
            0.6: 'cyan',
            0.7: 'lime',
            0.8: 'yellow',
            1.0: 'red'
        };
        var canvas = document.createElement("canvas"), ctx = canvas.getContext('2d'), gradient = ctx.createLinearGradient(0, 0, 0, 256);
        canvas.width = 1;
        canvas.height = 256;
        for (var i in grad) {
            gradient.addColorStop(+i, grad[i]);
        }
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 1, 256);
        return ctx.getImageData(0, 0, 1, 256).data;
    };
    class_1.prototype.colorize = function (pixels, gradient) {
        for (var i = 0, len = pixels.length, j; i < len; i += 4) {
            j = pixels[i + 3] * 4; // get gradient color from opacity value
            if (j) {
                pixels[i] = gradient[j];
                pixels[i + 1] = gradient[j + 1];
                pixels[i + 2] = gradient[j + 2];
            }
        }
    };
    class_1.prototype.drawCircles = function (canvasContext, brushes) {
        var _this = this;
        this.pointsLocation.forEach(function (pointLocation) {
            canvasContext.globalAlpha = 0.1;
            var pointCoord = _this.projection.fromLatLngToDivPixel(new google.maps.LatLng(pointLocation.latitude, pointLocation.longitude));
            var brush = brushes[pointLocation.radius];
            canvasContext.drawImage(brush.brush, pointCoord.x - brush.radius, pointCoord.y - brush.radius);
        });
    };
    class_1.prototype.generateBrushes = function (allRadius, normalizer) {
        var brushes = {};
        allRadius.forEach(function (brushRadius) {
            var blur = Math.round((brushRadius * 3 / 4) / normalizer);
            var radius = Math.round((brushRadius / 4) / normalizer);
            var fullRadius = blur + radius;
            var circleCanvas = document.createElement("canvas");
            var ctxCircleCanvas = circleCanvas.getContext('2d');
            circleCanvas.width = circleCanvas.height = fullRadius * 2;
            ctxCircleCanvas.shadowOffsetX = ctxCircleCanvas.shadowOffsetY = fullRadius * 2;
            ctxCircleCanvas.shadowBlur = blur;
            ctxCircleCanvas.shadowColor = 'black';
            ctxCircleCanvas.beginPath();
            ctxCircleCanvas.arc(-fullRadius, -fullRadius, radius, 0, Math.PI * 2);
            ctxCircleCanvas.closePath();
            ctxCircleCanvas.fill();
            brushes[brushRadius] = {
                brush: circleCanvas,
                radius: fullRadius
            };
        });
        return brushes;
    };
    class_1.prototype.getDistance = function (p1, p2) {
        var R = 6378137; // Earth’s mean radius in meter
        var dLat = this.toRad(p2.lat() - p1.lat());
        var dLong = this.toRad(p2.lng() - p1.lng());
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.toRad(p1.lat())) * Math.cos(this.toRad(p2.lat())) *
                Math.sin(dLong / 2) * Math.sin(dLong / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d / 1000; // returns the distance in meter
    };
    class_1.prototype.toRad = function (x) {
        return x * Math.PI / 180;
    };
    class_1.prototype.render = function () {
        return (h("div", null, h("div", { class: "map" })));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
AppHome.style = myGooglemapCss;
export { AppHome as my_googlemap };
