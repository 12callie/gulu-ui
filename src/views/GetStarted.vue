<template>
  <article class="markdown-body" v-html="mdGetStarted"></article>
</template>

<script lang="ts">
import mdGetStarted from "../markdown/getStarted.md";

export default {
  name: "GetStarted",
  data() {
    return {
      mdGetStarted,
    };
  },
};
</script>

<style lang="scss" scoped></style>
