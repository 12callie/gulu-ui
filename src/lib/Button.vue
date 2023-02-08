<template>
  <button
    class="gulu-button"
    :class="{ [`gulu-button-theme-${theme}`]: theme }"
  >
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  name: "Button",
  props: {
    theme: {
      type: String,
      default: "button",
    },
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
}
</style>
