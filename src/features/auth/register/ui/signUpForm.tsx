import { formOptions } from "@tanstack/react-form";
import { useRouter, useSearch } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { authClient } from "@/app/auth/lib/betterAuth/authClient";
import { ErrorSnackBar } from "@/shared/components/errorSnackBar";
import { FieldGroup } from "@/shared/components/ui/field";
import { checkUserExistsApi } from "../../checkUserExists/api/checkUserExists";
import { useAppForm } from "../../model/form";

const formOpts = formOptions({
	defaultValues: {
		name: "",
		phoneNumber: "",
	},
});

export function SignUpForm() {
	const router = useRouter();
	const { from } = useSearch({ strict: false }) as Record<string, string>;
	const [error, setError] = useState("");

	const checkUserExists = useServerFn(checkUserExistsApi);

	const form = useAppForm({
		...formOpts,
		asyncDebounceMs: 500,
		onSubmit: async ({ value }) => {
			const { phoneNumber, name } = value;

			const isUserExists = await checkUserExists({ data: { phoneNumber } });

			if (isUserExists) {
				setError("Phone Number already taken");
				return;
			}

			await authClient.phoneNumber.sendOtp({
				phoneNumber,
			});

			await authClient.phoneNumber.requestPasswordReset({
				phoneNumber,
				fetchOptions: {
					onSuccess: async ({ response }) => {
						const otpCode = response.headers.get("code");

						if (!otpCode) {
							router.invalidate();
							return;
						}

						router.navigate({
							to: "/auth/confirm-password",
							search: { otpCode, phoneNumber, from, name },
						});
					},
				},
			});
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
					name="name"
					validators={{
						onSubmit: ({ value }) => (!value ? "Name is required" : null),
						onChange: ({ value }) => (!value ? ["Name is required"] : null),
					}}
					children={(field) => <field.TextField label="Name" type="text" />}
				/>

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
			</FieldGroup>
			<form.AppForm>
				<form.SubscribeButton label="Create Account" />
			</form.AppForm>
		</form>
	);
}
