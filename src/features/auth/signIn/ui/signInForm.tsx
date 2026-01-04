import { WarningIcon, XIcon } from "@phosphor-icons/react";
import { formOptions } from "@tanstack/react-form";
import { useRouter, useSearch } from "@tanstack/react-router";
import { useState } from "react";
import { authClient } from "@/app/auth/lib/betterAuth/authClient";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/shared/components/ui/alert";
import { FieldGroup } from "@/shared/components/ui/field";
import { useAppForm } from "../../model/form";
import { sleep } from "@/shared/lib/utils";

const formOpts = formOptions({
  defaultValues: {
    phoneNumber: "",
    password: "",
  },
});

export function SignInForm() {
  const router = useRouter();
  const searchParams = useSearch({ strict: false }) as Record<string, string>;
  const [error, setError] = useState("");

  const form = useAppForm({
    ...formOpts,
    asyncDebounceMs: 500,
    onSubmit: async ({ value }) => {
      const res = await authClient.signIn.phoneNumber({
        phoneNumber: value.phoneNumber,
        password: value.password,
      });

      if (res.error) {
        setError(res.error.message || "Theres's error");
        return;
      }

      router.navigate({ to: searchParams.from ?? "/" });
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      {error && (
        <Alert variant="destructive" className=" mb-3">
          <WarningIcon />
          <div className="flex justify-between">
            <AlertTitle>Error</AlertTitle>
            <button
              type="button"
              className="cursor-pointer"
              onClick={() => setError("")}
            >
              <XIcon className="size-5" />
            </button>
          </div>

          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <FieldGroup>
        <form.AppField
          name="phoneNumber"
          validators={{
            onSubmit: ({ value }) =>
              !value ? "Phone Number is required" : null,
            onChange: ({ value }) =>
              !value ? "Phone Number is required" : null,
          }}
          children={(field) => (
            <field.TextField label="Phone Number" type="text" />
          )}
        />
        <form.AppField
          name="password"
          validators={{
            onSubmit: ({ value }) => (!value ? "Password is required" : null),
            onChange: ({ value }) => (!value ? "Password is required" : null),
          }}
          children={(field) => (
            <field.TextField label="Password" type="curr-password" />
          )}
        />
      </FieldGroup>
      <form.AppForm>
        <form.SubscribeButton label="Sign In" />
      </form.AppForm>
    </form>
  );
}
