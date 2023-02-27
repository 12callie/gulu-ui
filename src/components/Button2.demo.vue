<demo>支持 size</demo>
<template>
  <div>
    <div>
      <Button size="large">大</Button>
      <Button size="normal">常规</Button>
      <Button size="small">小</Button>
    </div>
    <div>
      <Button theme="text" size="large">大</Button>
      <Button theme="text">常规</Button>
      <Button theme="text" size="small">小</Button>
    </div>
    <div>
      <Button theme="link" size="large">大</Button>
      <Button theme="link">常规</Button>
      <Button theme="link" size="small">小</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";

export default {
  components: {
    Button,
  },
};
</script>
