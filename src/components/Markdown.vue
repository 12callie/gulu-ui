<template>
  <article class="markdown-body" v-html="content"></article>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  name: "Markdown",
  props: {
    path: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const content = ref<string>("");
    import(props.path).then((res) => {
      content.value = res.default;
    });

    return { content };
  },
};
</script>

<style lang="scss" scoped></style>
