!function(root,factory){"object"==typeof exports&&"object"==typeof module?module.exports=factory():"function"==typeof define&&define.amd?define([],factory):"object"==typeof exports?exports.VueResize=factory():root.VueResize=factory()}(this,function(){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.i=function(value){return value},__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=5)}([function(module,exports){var g,_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};g=function(){return this}();try{g=g||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":_typeof(window))&&(g=window)}module.exports=g},function(module,exports,__webpack_require__){var __vue_exports__,__vue_options__;__webpack_require__(3),__vue_exports__=__webpack_require__(2);var __vue_template__=__webpack_require__(4);__vue_options__=__vue_exports__=__vue_exports__||{},"object"!=typeof __vue_exports__.default&&"function"!=typeof __vue_exports__.default||(__vue_options__=__vue_exports__=__vue_exports__.default),"function"==typeof __vue_options__&&(__vue_options__=__vue_options__.options),__vue_options__.render=__vue_template__.render,__vue_options__.staticRenderFns=__vue_template__.staticRenderFns,__vue_options__._scopeId="data-v-c7b3205a",module.exports=__vue_exports__},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={name:"resize-observer",methods:{notify:function(){this.$emit("notify")},addResizeHandlers:function(){this._resizeObject.contentDocument.defaultView.addEventListener("resize",this.notify),this._w===this.$el.offsetWidth&&this._h===this.$el.offsetHeight||this.notify()},removeResizeHandlers:function(){this._resizeObject&&this._resizeObject.onload&&(this._resizeObject.contentDocument&&this._resizeObject.contentDocument.defaultView.addEventListener("resize",this.notify),delete this._resizeObject.onload)}},mounted:function(){var _this=this;this.$nextTick(function(){_this._w=_this.$el.offsetWidth,_this._h=_this.$el.offsetHeight});var isIE="Trident"===navigator.userAgent.match(/Trident/),object=document.createElement("object");this._resizeObject=object,object.setAttribute("style","display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;"),object.onload=this.addResizeHandlers,object.type="text/html",isIE&&this.$el.appendChild(object),object.data="about:blank",isIE||this.$el.appendChild(object)},beforeDestroy:function(){this.removeResizeHandlers()}}},function(module,exports){},function(module,exports){module.exports={render:function(){var _vm=this,_c=(_vm.$createElement,_vm._c);return _c("div",{staticClass:"resize-observer",attrs:{tabindex:"-1"}})},staticRenderFns:[]}},function(module,exports,__webpack_require__){"use strict";(function(global){function install(Vue){Vue.component("resize-observer",__WEBPACK_IMPORTED_MODULE_0__components_ResizeObserver_vue___default.a)}var __WEBPACK_IMPORTED_MODULE_0__components_ResizeObserver_vue__=__webpack_require__(1),__WEBPACK_IMPORTED_MODULE_0__components_ResizeObserver_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_ResizeObserver_vue__);Object.defineProperty(exports,"__esModule",{value:!0}),__webpack_require__.d(exports,"ResizeObserver",function(){return __WEBPACK_IMPORTED_MODULE_0__components_ResizeObserver_vue___default.a}),exports.install=install;var plugin={version:"0.1.2",install:install};exports.default=plugin;var GlobalVue=null;"undefined"!=typeof window?GlobalVue=window.Vue:"undefined"!=typeof global&&(GlobalVue=global.Vue),GlobalVue&&GlobalVue.use(plugin)}).call(exports,__webpack_require__(0))}])});