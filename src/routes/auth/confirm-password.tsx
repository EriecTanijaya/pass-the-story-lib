import { WarningIcon, XIcon } from "@phosphor-icons/react";
import { formOptions } from "@tanstack/react-form";
import { createFileRoute, redirect, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { authClient } from "@/app/auth/lib/betterAuth/authClient";
import { useAppForm, withFieldGroup } from "@/features/auth/model/form";
import {
	Alert,
	AlertDescription,
	AlertTitle,
} from "@/shared/components/ui/alert";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/shared/components/ui/card";
import { FieldGroup } from "@/shared/components/ui/field";

export const Route = createFileRoute("/auth/confirm-password")({
	component: RouteComponent,
	validateSearch: (
		search,
	): { otpCode: string; phoneNumber: string; name: string; from?: string } => {
		return {
			otpCode: search.otpCode as string,
			phoneNumber: search.phoneNumber as string,
			name: search.name as string,
			from: search.from as string,
		};
	},
	beforeLoad: ({ search }) => {
		if (!search.otpCode || !search.phoneNumber) {
			throw redirect({
				to: "/auth",
			});
		}
	},
});

const formOpts = formOptions({
	defaultValues: {
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
						<field.TextField label="Password" type="new-password" />
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
						<field.TextField label="Confirm Password" type="new-password" />
					)}
				/>
			</>
		);
	},
});

function RouteComponent() {
	const { otpCode, phoneNumber, from, name } = Route.useSearch();

	const router = useRouter();

	const [error, setError] = useState("");

	const form = useAppForm({
		...formOpts,
		asyncDebounceMs: 500,
		onSubmit: async ({ value }) => {
			const resetPasswordRes = await authClient.phoneNumber.resetPassword({
				otp: otpCode,
				phoneNumber,
				newPassword: value.password.password,
			});

			if (resetPasswordRes.error) {
				setError(resetPasswordRes.error.message || "There's error");
				return;
			}

			const deleteUserRes = await authClient.deleteUser();

			if (deleteUserRes.error) {
				setError(deleteUserRes.error.message || "There's error");
				return;
			}

			const createAccountRes = await authClient.signUp.email({
				email: `${phoneNumber}@temp.com`,
				name,
				password: value.password.password,
				phoneNumber,
			});

			if (createAccountRes.error) {
				setError(createAccountRes.error.message || "There's error");
				return;
			}

			router.navigate({ to: from ?? "/" });
		},
	});

	return (
		<main className="flex items-center justify-center p-5">
			<Card className="w-md md:max-h-fit">
				<CardHeader>
					<CardTitle>Update your password</CardTitle>
				</CardHeader>
				<CardContent>
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
					<form
						onSubmit={(e) => {
							e.preventDefault();
							form.handleSubmit();
						}}
					>
						<FieldGroup>
							<FieldGroupPassword form={form} fields="password" />
						</FieldGroup>
						<form.AppForm>
							<form.SubscribeButton label="Set Password" />
						</form.AppForm>
					</form>
				</CardContent>
			</Card>
		</main>
	);
}
