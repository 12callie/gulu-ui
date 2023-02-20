<template>
  <div class="top-nav">
    <div
      class="toggleAside"
      @click="toggleAside"
      v-if="toggleMenuButtonVisible"
    >
      <svg class="icon">
        <use xlink:href="#icon-menu"></use>
      </svg>
    </div>
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-logo"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <router-link to="/doc">文档</router-link>
    </ul>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";

export default {
  name: "TopNav",
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value;
    };
    return { toggleAside };
  },
};
</script>

<style lang="scss" scoped>
$color: #007974;
.top-nav {
  color: $color;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;

  > .toggleAside {
    display: none;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }

  > .logo {
    max-width: 6em;
    margin-right: auto;

    > svg {
      width: 32px;
      height: 32px;
    }

    &:hover {
      text-decoration: none;
    }
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }

  @media (max-width: 500px) {
    > .toggleAside {
      display: block;
    }
    > .logo {
      margin: 0 auto;
    }
    > .menu {
      display: none;
    }
  }
}
</style>
