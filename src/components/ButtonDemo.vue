<template>
  <div>Button示例</div>
  <h1>示例1</h1>
  <div>
    <Button>默认</Button>
    <Button theme="button">默认</Button>
    <Button theme="text">文本</Button>
    <Button theme="link">链接</Button>
  </div>
  <h1>示例2</h1>
  <div>
    <Button size="large">Large</Button>
    <Button size="normal">Default</Button>
    <Button size="small">Small</Button>
  </div>
  <div>
    <Button theme="text" size="large">Large</Button>
    <Button theme="text">Default</Button>
    <Button theme="text" size="small">Small</Button>
  </div>
  <div>
    <Button theme="link" size="large">Large</Button>
    <Button theme="link">Default</Button>
    <Button theme="link" size="small">Small</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";

export default {
  name: "ButtonDemo",
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped></style>
