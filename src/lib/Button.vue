<template>
  <button class="gulu-button" :class="classes">
    <slot />
  </button>
</template>

<script lang="ts">
import { computed } from "vue";

export default {
  name: "Button",
  props: {
    theme: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "normal",
    },
  },
  setup(props) {
    const classes = computed(() => {
      return {
        [`gulu-button-theme-${props.theme}`]: props.theme,
        [`gulu-button-size-${props.size}`]: props.size,
      };
    });
    return { classes };
  },
};
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$blue: #40a9ff;
$radius: 4px;
.gulu-button {
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);

  & + & {
    margin-left: 8px;
  }

  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &.gulu-button-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;

    &:hover,
    &:focus {
      background: rgb(250, 250, 250);
    }
  }

  &.gulu-button-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;

    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }

  &.gulu-button-size-large {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }

  &.gulu-button-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
}
</style>
