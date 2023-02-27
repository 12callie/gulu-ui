<demo>常规用法</demo>
<template>
  <Tabs v-model:selected="x">
    <Tab title="导航">内容一</Tab>
    <Tab title="导航导航">内容二</Tab>
    <Tab title="导航导航导航">内容三</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
import { ref } from "vue";

export default {
  components: {
    Tabs,
    Tab,
  },
  setup() {
    const x = ref("导航");
    return { x };
  },
};
</script>
