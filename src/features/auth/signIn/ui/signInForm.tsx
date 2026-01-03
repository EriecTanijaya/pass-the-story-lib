import { formOptions } from "@tanstack/react-form";
import { useRouter } from "@tanstack/react-router";
import { FieldGroup } from "@/shared/components/ui/field";
import { useAppForm } from "../../model/form";

const formOpts = formOptions({
	defaultValues: {
		userName: "",
		password: "",
	},
});

export function SignInForm() {
	const _router = useRouter();

	const form = useAppForm({
		...formOpts,
		asyncDebounceMs: 500,
		onSubmit: async ({ value }) => {
			console.log({ value });
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
