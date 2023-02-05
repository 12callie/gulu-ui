<template>
  <div :id="id">
    <button v-bind="rest">
      <slot />
    </button>
  </div>
</template>

<script lang="ts">
export default {
  name: "Button",
  inheritAttrs: false,
  setup(props, context) {
    const { id, ...rest } = context.attrs;
    return { id, rest };
  },
};
</script>

<style lang="scss" scoped></style>
