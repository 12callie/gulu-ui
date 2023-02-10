<template>
  <div>Dialog 示例</div>
  <h1>示例1</h1>
  <Button @click="toggle">确认弹窗</Button>
  <Dialog
    v-model:visible="visible"
    :closeOnClickOverlay="false"
    :ok="f1"
    :cancel="f2"
  />
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { ref } from "vue";

export default {
  name: "DialogDemo",
  components: {
    Dialog,
    Button,
  },
  setup() {
    const visible = ref(false);
    const toggle = () => {
      visible.value = !visible.value;
    };
    const f1 = () => {
      console.log("ok1");
      return false;
    };
    const f2 = () => {
      console.log("cancel2");
    };
    return { visible, toggle, f1, f2 };
  },
};
</script>

<style lang="scss" scoped></style>
