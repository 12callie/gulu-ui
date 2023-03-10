<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav" ref="container">
      <div
        class="gulu-tabs-nav-item"
        :class="{ selected: selected === t }"
        @click="selectTitle(t)"
        v-for="(t, index) in titles"
        :key="index"
        :ref="
          (el) => {
            if (t === selected) currentItem = el;
          }
        "
      >
        {{ t }}
      </div>
      <div class="gulu-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="gulu-tabs-content">
      <component
        class="gulu-tabs-content-item"
        :is="current"
        :key="current.props.title"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Tab from "./Tab.vue";
import { computed, ref, watchPostEffect } from "vue";

export default {
  name: "Tabs",
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const currentItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    watchPostEffect(() => {
      const { width } = currentItem.value.getBoundingClientRect();
      indicator.value.style.width = width + "px";
      const { left: left1 } = container.value.getBoundingClientRect();
      const { left: left2 } = currentItem.value.getBoundingClientRect();
      const left = left2 - left1;
      indicator.value.style.left = left + "px";
    });
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs 子标签必须是 Tab");
      }
    });
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    const current = computed(() => {
      return defaults.find((tag) => {
        return tag.props.title === props.selected;
      });
    });
    const selectTitle = (title: string) => {
      context.emit("update:selected", title);
    };
    return {
      defaults,
      titles,
      current,
      selectTitle,
      currentItem,
      indicator,
      container,
    };
  },
};
</script>

<style lang="scss">
$blue: #40a9ff;
$border-color: #d9d9d9;
.gulu-tabs {
  &-nav {
    display: flex;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      width: 100px;
      background: $blue;
      left: 0;
      bottom: -1px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>
