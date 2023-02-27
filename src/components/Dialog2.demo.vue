<demo>一键打开 Dialog</demo>
<template>
  <Button @click="showDialog">打开对话框</Button>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import { openDialog } from "../lib/openDialog";

export default {
  components: {
    Button,
  },
  setup() {
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
    return { showDialog };
  },
};
</script>
