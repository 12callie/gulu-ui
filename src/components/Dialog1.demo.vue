<demo>常规用法</demo>
<template>
  <div>
    <Button @click="toggle">打开对话框</Button>
    <Dialog
      v-model:visible="visible"
      :closeOnClickOverlay="false"
      :ok="f1"
      :cancel="f2"
    >
      <template v-slot:content>
        <strong>确定吗？</strong>
        <div>hi</div>
      </template>
      <template v-slot:title>
        <strong>提示</strong>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import { Button, Dialog } from "../lib/index";
import { ref } from "vue";

export default {
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
      console.log("ok");
      return false;
    };
    const f2 = () => {
      console.log("cancel");
    };

    return { visible, toggle, f1, f2 };
  },
};
</script>
