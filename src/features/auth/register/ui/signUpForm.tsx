import { formOptions } from "@tanstack/react-form";
import { useRouter } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { FieldGroup } from "@/shared/components/ui/field";
import { useAppForm, withFieldGroup } from "../../signIn/model/form";
import { registerApi } from "../api/registerApi";

const formOpts = formOptions({
	defaultValues: {
		fullName: "",
		userName: "",
		password: {
			password: "",
			confirmPassword: "",
		},
	},
});

const FieldGroupPassword = withFieldGroup({
	defaultValues: {
		password: "",
		confirmPassword: "",
	},
	render: ({ group }) => {
		return (
			<>
				<group.AppField
					name="password"
					validators={{
						onSubmit: ({ value }) => (!value ? "Password is required" : null),
					}}
					children={(field) => (
						<field.TextField label="Password" type="password" />
					)}
				/>

				<group.AppField
					name="confirmPassword"
					validators={{
						onChangeListenTo: ["password"],
						onChange: ({ value }) => {
							if (value !== group.getFieldValue("password")) {
								return "Passwords do not match";
							}

							return undefined;
						},
					}}
					children={(field) => (
						<field.TextField label="Confirm Password" type="password" />
					)}
				/>
			</>
		);
	},
});

export function SignUpForm() {
	const router = useRouter();
	const register = useServerFn(registerApi);

	const form = useAppForm({
		...formOpts,
		asyncDebounceMs: 500,
		onSubmit: async ({ value }) => {
			const res = await register({
				data: {
					fullName: value.fullName,
					password: value.password.password,
					username: value.userName,
				},
			});

			if (!res.success) {
				alert(res.error);
			}

			router.navigate({ to: "/" });
		},
	});

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				form.handleSubmit();
			}}
		>
			<FieldGroup>
				<form.AppField
					name="fullName"
					validators={{
						onSubmit: ({ value }) => (!value ? "Full name is required" : null),
						onChange: ({ value }) =>
							!value ? ["Full name is required"] : null,
					}}
					children={(field) => (
						<field.TextField label="Full Name" type="text" />
					)}
				/>

				<form.AppField
					name="userName"
					validators={{
						onSubmit: ({ value }) => (!value ? "Username is required" : null),
						onChange: ({ value }) => (!value ? "Username is required" : null),
					}}
					children={(field) => <field.TextField label="Username" type="text" />}
				/>

				<FieldGroupPassword form={form} fields="password" />
			</FieldGroup>
			<form.AppForm>
				<form.SubscribeButton label="Create Account" />
			</form.AppForm>
		</form>
	);
}
