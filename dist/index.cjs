'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const _hoisted_1 = {
  class: "'vue-component-rollup'"
};
var script = /*#__PURE__*/vue.defineComponent({
  __name: 'index',
  setup(__props) {
    const msg = vue.ref('hello');
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, vue.toDisplayString(msg.value), 1 /* TEXT */);
    };
  }
});

script.__file = "src/index.vue";

exports.default = script;
