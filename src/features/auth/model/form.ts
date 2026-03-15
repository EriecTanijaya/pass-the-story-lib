import { createFormHook } from "@tanstack/react-form";
import { SubscribeButton } from "../ui/components/subscribeButton";
import { TextField } from "../ui/components/textField";
import { fieldContext, formContext } from "./formContext";
import { DynamicList } from "../ui/components/dynamicList";

export const { useAppForm, withFieldGroup } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    TextField,
    DynamicList,
  },
  formComponents: {
    SubscribeButton,
  },
});
