<template>
  <button
    @click="toggle"
    class="gulu-switch"
    :class="{ 'gulu-switch-checked': value }"
  >
    <span></span>
  </button>
</template>

<script lang="ts">
export default {
  name: "Switch",
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    return { toggle };
  },
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.gulu-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: grey;
  border-radius: calc($h / 2);
  position: relative;

  span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: calc($h2 / 2);
    transition: left 250ms;
  }

  &.gulu-switch-checked {
    background: blue;

    span {
      left: calc(100% - #{$h2} - 2px);
    }
  }

  &:focus {
    outline: none;
  }
}
</style>
