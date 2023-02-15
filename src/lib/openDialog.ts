import Dialog from "./Dialog.vue";
import { createApp, h } from "vue";

export const openDialog = (options) => {
  const { title, content, closeOnClickOverlay, ok, cancel } = options;
  const div = document.createElement("div");
  document.body.appendChild(div);
  const close = () => {
    // @ts-ignore
    dialogDiv.unmount(div);
    div.remove();
  };
  // createApp(Dialog).mount(div);
  const dialogDiv = createApp({
    render() {
      return h(
        Dialog,
        {
          visible: true,
          ok,
          cancel,
          closeOnClickOverlay,
          "onUpdate:visible": (newVisible) => {
            if (newVisible === false) {
              close();
            }
          },
        },
        { title: () => title, content: () => content }
      );
    },
  });
  dialogDiv.mount(div);
};
