<template>
  <div>Dialog 示例</div>
  <h1>示例1</h1>
  <Button @click="toggle">确认弹窗</Button>
  <Dialog
    v-model:visible="visible"
    :closeOnClickOverlay="false"
    :ok="f1"
    :cancel="f2"
  >
    <template v-slot:content>
      <strong>确定吗？1</strong>
      <div>hi-hi</div>
    </template>
    <template v-slot:title>
      <strong>提示1</strong>
    </template>
  </Dialog>
  <h1>示例2</h1>
  <Button @click="showDialog">确认弹窗</Button>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { ref } from "vue";
import { openDialog } from "../lib/openDialog";

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
      console.log("cancel1");
    };
    const showDialog = () => {
      openDialog({
        title: "提示2",
        content: "确定？2",
        closeOnClickOverlay: false,
        ok: () => {
          console.log("ok2");
        },
        cancel: () => {
          console.log("cancel2");
        },
      });
    };
    return { visible, toggle, f1, f2, showDialog };
  },
};
</script>

<style lang="scss" scoped></style>
