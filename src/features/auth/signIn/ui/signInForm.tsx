import { formOptions } from "@tanstack/react-form";
import { FieldGroup } from "@/shared/components/ui/field";
import { useAppForm } from "../model/form";

const formOpts = formOptions({
	defaultValues: {
		userName: "",
		password: "",
	},
});

export function SignInForm() {
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
					children={(field) => <field.TextField label="Username" type="text" />}
				/>
				<form.AppField
					name="password"
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
