import { formOptions } from "@tanstack/react-form";
import { useRouter, useSearch } from "@tanstack/react-router";
import { useState } from "react";
import { authClient } from "@/app/auth/lib/betterAuth/authClient";
import { ErrorSnackBar } from "@/shared/components/errorSnackBar";
import { FieldGroup } from "@/shared/components/ui/field";
import { useAppForm } from "../../model/form";

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
			<ErrorSnackBar error={error} setError={setError} />

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
