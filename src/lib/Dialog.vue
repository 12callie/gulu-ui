<template>
  <template v-if="visible">
    <div class="gulu-dialog-overlay" @click="onClickOverlay"></div>
    <div class="gulu-dialog-wrapper">
      <div class="gulu-dialog">
        <header>
          标题
          <span class="gulu-dialog-close" @click="close">
            <svg class="icon">
              <use xlink:href="#icon-close"></use>
            </svg>
          </span>
        </header>
        <main>
          <p>第一行字</p>
          <p>第二行字</p>
        </main>
        <footer>
          <Button @click="cancel">取消</Button>
          <Button level="main" @click="ok">确定</Button>
        </footer>
      </div>
    </div>
  </template>
</template>

<script lang="ts">
import Button from "./Button.vue";

export default {
  name: "Dialog",
  components: {
    Button,
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true,
    },
    ok: {
      type: Function,
    },
    cancel: {
      type: Function,
    },
  },
  setup(props, context) {
    const close = () => {
      context.emit("update:visible", false);
    };
    const onClickOverlay = () => {
      if (props.closeOnClickOverlay) {
        close();
      }
    };
    console.log("ok", props.ok);
    console.log("cancel", props.cancel);
    const cancel = () => {
      props.cancel?.();
      close();
    };
    const ok = () => {
      if (props.ok?.() !== false) {
        close();
      }
    };
    return { close, onClickOverlay, cancel, ok };
  },
};
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.gulu-dialog {
  background-color: #fff;
  min-width: 15em;
  max-width: 90%;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);

  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.6);
    z-index: 10;
  }

  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }

  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }

  > main {
    padding: 12px 16px;
  }

  > footer {
    padding: 12px 16px;
    border-top: 1px solid $border-color;
    text-align: right;
  }

  &-close {
    cursor: pointer;
  }
}
</style>
