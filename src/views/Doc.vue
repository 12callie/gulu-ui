<template>
  <div class="layout">
    <TopNav class="nav" :toggle-menu-button-visible="true" />
    <div class="content">
      <aside v-if="asideVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";
import { inject, Ref } from "vue";

export default {
  name: "Doc",
  components: { TopNav },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    return { asideVisible };
  },
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .nav {
    flex-shrink: 0;
  }

  .content {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }

    aside {
      background: lightblue;
      width: 150px;
      flex-shrink: 0;
      padding: 70px 0 16px 0;
      position: fixed;
      z-index: 1;
      top: 0;
      left: 0;
      height: 100%;

      > h2 {
        margin-bottom: 4px;
        padding: 0 16px;
      }

      > ol {
        > li {
          > a {
            display: block;
            padding: 4px 16px;
            text-decoration: none;

            &.router-link-active {
              background: #fff;
            }
          }
        }
      }
    }

    main {
      flex-grow: 1;
      overflow: auto;
      padding: 16px;
    }
  }
}
</style>
