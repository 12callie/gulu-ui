<demo>一键打开 Dialog</demo>
<template>
  <Button @click="showDialog">打开对话框</Button>
</template>

<script lang="ts">
import { Button, openDialog } from "../lib/index";

export default {
  components: {
    Button,
  },
  setup() {
    const showDialog = () => {
      openDialog({
        title: "提示",
        content: "确定？",
        closeOnClickOverlay: false,
        ok: () => {
          console.log("ok");
        },
        cancel: () => {
          console.log("cancel");
        },
      });
    };
    return { showDialog };
  },
};
</script>
