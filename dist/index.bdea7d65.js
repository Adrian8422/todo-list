// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2HtCd":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "222e65dabdea7d65";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"7PGg5":[function(require,module,exports) {
var _header = require("./components/header");
var _text = require("./components/text");
var _todoItem = require("./components/todo-item");
var _pages = require("./pages");
var _state = require("./state");
(()=>{
    _pages.initHomePage(document.querySelector("#root"));
})();

},{"./components/header":"cGUP1","./components/text":"5olxc","./pages":"2PHeU","./components/todo-item":"7mTD8","./state":"4v8yo"}],"cGUP1":[function(require,module,exports) {
class Header extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        this.render();
    }
    render() {
        const style = document.createElement("style");
        style.innerHTML = `

    .root{
        display: flex;
        height: 80px;
        width: 100%;
        background-color: #9cbbe9;
        justify-content: center;
        align-items: center;
        
    }
    .title-header{
        
        font-size: 18px;
        color: blue;


    }

    
    `;
        this.shadow.appendChild(style);
        const header = document.createElement("header");
        header.innerHTML = `
    
    <header class="root">
    <h2 class="title-header">Header ?¡?¡?</h2>
    </header>
    
    `;
        this.shadow.appendChild(header);
    }
}
customElements.define("header-element", Header);

},{}],"5olxc":[function(require,module,exports) {
class TypeText extends HTMLElement {
    constructor(){
        super();
        this.tags = [
            "h1",
            "h2",
            "p"
        ];
        this.tag = "p";
        this.shadow = this.attachShadow({
            mode: "open"
        });
        if (this.tags.includes(this.getAttribute("tag"))) this.tag = this.getAttribute("tag") || this.tag;
        console.log(this.tag);
        this.render();
    }
    render() {
        const tagText = document.createElement(this.tag);
        tagText.textContent = this.textContent;
        this.shadow.appendChild(tagText);
    }
}
customElements.define("text-type", TypeText);

},{}],"2PHeU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initHomePage", ()=>initHomePage
);
var _state = require("../state");
function initHomePage(containerEl) {
    function renderTasks(itemContainer, taskList) {
        itemContainer.innerHTML = "";
        const sortedTaskList = taskList.sort((t)=>t.completed
        );
        sortedTaskList.forEach((t)=>{
            const todoItemEl = document.createElement("todo-items");
            todoItemEl.setAttribute("title", t.text);
            todoItemEl.setAttribute("id", t.id);
            todoItemEl.setAttribute("checked", t.completed);
            todoItemEl.addEventListener("change", (e)=>{
                _state.state.changeItemState(e.detail.id, e.detail.value);
            });
            todoItemEl.addEventListener("delete", (e)=>{
                _state.state.deleteTasks(e.detail.id);
            });
            itemContainer.appendChild(todoItemEl);
        });
    }
    containerEl.innerHTML = ` 
  <header-element></header-element>
  <div class="container-page">
  <h1 class="title-page">Mis pendientes</h1>
  <form class="form-page">
    <div class="container-form-input">
      <label for="pendinput" class="label-form">Nuevo pendiente</label>
      <input
        type="text"
        autocomplete="off"
        class="form__input"
        id="pendinput"
      />
    </div>
    <button class="button-form">Agregar</button>
  </form>
  <div class="todo-container"></div>
 </div>
  
  
  `;
    const currenstateTasks = _state.state.getActiveTasks();
    const itemContainer1 = containerEl.querySelector(".todo-container");
    renderTasks(itemContainer1, currenstateTasks);
    containerEl.querySelector(".form-page").addEventListener("submit", (e)=>{
        e.preventDefault();
        const inputEl = containerEl.querySelector(".form__input");
        const inputText = inputEl.value.trim();
        if (inputText == "") return;
        _state.state.addTasks(inputText);
        inputEl.value = "";
    });
    _state.state.subscribe(()=>{
        renderTasks(itemContainer1, _state.state.getActiveTasks());
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","../state":"4v8yo"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"4v8yo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state
);
const state = {
    data: {
        tasks: [
            {
                id: 1,
                text: "Primer item",
                completed: true
            },
            {
                id: 2,
                text: "Segundo item",
                completed: true
            },
            {
                id: 3,
                text: "Tercer item",
                deleted: true
            }, 
        ]
    },
    listeners: [],
    init () {
        const localData = JSON.parse(localStorage.getItem("saved-tarea"));
        if (!localData) return;
        else this.setState(localData);
    },
    getState () {
        return this.data;
    },
    getActiveTasks () {
        const currentState = this.getState();
        return currentState.tasks.filter((t)=>!t.deleted
        );
    },
    addTasks (taskText) {
        const currentState = this.getState();
        const limitedTasks = 200;
        const currentsId = currentState.tasks.map((t)=>t.id
        );
        if (currentsId.length == limitedTasks) {
            alert("Much tasks bro! Low state");
            return;
        }
        let tasksId = Math.floor(Math.random() * limitedTasks) + 1;
        while(currentsId.includes(tasksId))tasksId = Math.floor(Math.random() * limitedTasks) + 1;
        const newTask = {
            id: tasksId,
            text: taskText,
            completed: false,
            deleted: false
        };
        currentState.tasks.push(newTask);
        this.setState(currentState);
    },
    setState (newState) {
        this.data = newState;
        localStorage.setItem("saved-tarea", JSON.stringify(this.data));
        for (const cb of this.listeners)cb();
        console.log("Soy el state eh cambiado", this.data);
    },
    changeItemState (id, value) {
        const currentState = this.getState();
        const found = currentState.tasks.find((t)=>t.id == parseInt(id)
        );
        found.completed = value;
        this.setState(currentState);
    },
    deleteTasks (tasksId) {
        const currentState = this.getState();
        const foundTasks = currentState.tasks.find((t)=>t.id == parseInt(tasksId)
        );
        foundTasks.deleted = true;
        this.setState(currentState);
    },
    subscribe (callback) {
        this.listeners.push(callback);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7mTD8":[function(require,module,exports) {
const imgDeleted = require("url:../../images/paper-recicle.png");
class TodoItem extends HTMLElement {
    constructor(){
        super();
        this.checked = false;
        this.shadow = this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        this.title = this.getAttribute("title");
        this.checked = JSON.parse(this.getAttribute("checked"));
        this.todoId = this.getAttribute("id");
        const style = document.createElement("style");
        style.innerHTML = `

    * {
    box-sizing: border-box;
    }

    .container-card {
        display: grid;
        grid-template: 1fr / minmax(0, 1fr) 25px;
        column-gap: 7.5px;
        
        min-height: 100px;
        padding: 15px;
        
        background-color: #fff599;
        border-radius: 4px;
        box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.5);
    }
    .todo-item-active {
        border: 1px solid black;
    }

    .todo-item__text {
        margin: 0;
    
        font-size: 18px;
        overflow-wrap: break-word;
    }

    .checked-text{
        text-decoration: line-through;
    }
    
    .container-checked__remove{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    
        padding: 2.5px 0;
    }
    
    .interactive-input{
        margin: 0;
    }
    
    .interactive-delete {
        width: 80%;
        height: 20px;
    
        cursor: pointer;
    }
    
    
    
    `;
        this.render();
        this.shadow.appendChild(style);
    }
    addListeners() {
        const cardEl = this.shadow.querySelector(".container-card");
        const deleteEl = this.shadow.querySelector(".interactive-delete");
        const checkboxEl = this.shadow.querySelector(".interactive-input");
        checkboxEl.addEventListener("click", (e)=>{
            e.stopPropagation();
            const eventTarget = e.target;
            const checkEvent = new CustomEvent("change", {
                detail: {
                    id: this.todoId,
                    value: eventTarget.checked
                }
            });
            this.dispatchEvent(checkEvent);
        });
        this.addEventListener("click", ()=>{
            const cardClass = cardEl.classList;
            if (cardClass.contains("todo-item-active")) {
                cardClass.remove("todo-item-active");
                deleteEl.style.display = "none";
            } else {
                cardClass.add("todo-item-active");
                deleteEl.style.display = "initial";
            }
        });
        deleteEl.addEventListener("click", (e)=>{
            e.stopPropagation();
            const deleteEvent = new CustomEvent("delete", {
                detail: {
                    id: this.todoId
                }
            });
            this.dispatchEvent(deleteEvent);
        });
    }
    render() {
        this.shadow.innerHTML = `
    
    <div class="container-card">
    <p class="todo-item__text ${this.checked ? "checked-text" : ""}">${this.title}</p>
    
    <div class="container-checked__remove">
      <input  type="checkbox" ${this.checked ? "checked" : ""} class="interactive-input"/>

      <img src="${imgDeleted}" style="display: none;" class="interactive-delete"/> 
    </div>
  </div>
    
    `;
        this.addListeners();
    }
}
customElements.define("todo-items", TodoItem);

},{"url:../../images/paper-recicle.png":"bjDzC"}],"bjDzC":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2VWEd') + "paper-recicle.a66786db.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"chiK4":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}]},["2HtCd","7PGg5"], "7PGg5", "parcelRequire2c83")

//# sourceMappingURL=index.bdea7d65.js.map
