import { message } from "antd";

export const notify = {
  success(messageText: string) {
    message.success(messageText);
  },

  error(messageText: string) {
    message.error(messageText);
  },

  warning(messageText: string) {
    message.warning(messageText);
  },
};
