import { formOptions } from "@tanstack/react-form";
import { useRouter } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { FieldGroup } from "@/shared/components/ui/field";
import { loginApi } from "../api/signInApi";
import { useAppForm } from "../model/form";

const formOpts = formOptions({
	defaultValues: {
		userName: "",
		password: "",
	},
});

export function SignInForm() {
	const router = useRouter();
	const login = useServerFn(loginApi);

	const form = useAppForm({
		...formOpts,
		asyncDebounceMs: 500,
		onSubmit: async ({ value }) => {
			const res = await login({
				data: { password: value.password, userName: value.userName },
			});

			if (res.error) {
				alert(res.error);
				return;
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
					name="userName"
					validators={{
						onSubmit: ({ value }) => (!value ? "Username is required" : null),
						onChange: ({ value }) => (!value ? "Username is required" : null),
					}}
					children={(field) => <field.TextField label="Username" type="text" />}
				/>
				<form.AppField
					name="password"
					validators={{
						onSubmit: ({ value }) => (!value ? "Password is required" : null),
						onChange: ({ value }) => (!value ? "Password is required" : null),
					}}
					children={(field) => (
						<field.TextField label="Password" type="password" />
					)}
				/>
			</FieldGroup>
			<form.AppForm>
				<form.SubscribeButton label="Sign In" />
			</form.AppForm>
		</form>
	);
}
