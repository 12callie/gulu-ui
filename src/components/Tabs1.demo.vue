<demo>常规用法</demo>
<template>
  <Tabs v-model:selected="x">
    <Tab title="导航1">内容一</Tab>
    <Tab title="导航2">内容二</Tab>
    <Tab title="导航3">内容三</Tab>
  </Tabs>
</template>

<script lang="ts">
import { Tabs, Tab } from "../lib/index";
import { ref } from "vue";

export default {
  components: {
    Tabs,
    Tab,
  },
  setup() {
    const x = ref("导航1");
    return { x };
  },
};
</script>
