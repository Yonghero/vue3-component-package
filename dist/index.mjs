import { defineComponent, ref, openBlock, createElementBlock, toDisplayString } from 'vue';

const _hoisted_1 = {
  class: "'vue-component-rollup'"
};
var script = /*#__PURE__*/defineComponent({
  __name: 'index',
  setup(__props) {
    const msg = ref('hello');
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, toDisplayString(msg.value), 1 /* TEXT */);
    };
  }
});

script.__file = "src/index.vue";

export { script as default };
