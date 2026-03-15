import { createFormHook } from "@tanstack/react-form";
import { fieldContext, formContext } from "./formContext";
import { FormTextInput } from "./components/formTextInput";
import { DynamicList } from "./components/dynamicList";
import { FormSubmitButton } from "./components/formSubmitButton";

export const { useAppForm, withFieldGroup } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    FormTextInput,
    DynamicList,
  },
  formComponents: {
    FormSubmitButton,
  },
});
