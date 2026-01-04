import { EyeClosedIcon, EyeIcon } from "@phosphor-icons/react";
import { useStore } from "@tanstack/react-form";
import { useState } from "react";
import { Button } from "@/shared/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import { useFieldContext } from "../../model/formContext";

type TextFieldType = "text" | "new-password" | "curr-password";

type TextFieldProps = {
	label: string;
	type: TextFieldType;
};

function getAutoCompleteVal(type: TextFieldType) {
	switch (type) {
		case "curr-password":
			return "current-password";
		case "new-password":
			return "new-password";
	}
}

export function TextField({ label, type }: TextFieldProps) {
	const field = useFieldContext<string>();
	const [showPassword, setShowPassword] = useState(false);
	const autoComplete = getAutoCompleteVal(type);
	const isPasswordType = type === "curr-password" || type === "new-password";
	const inputType = showPassword || type === "text" ? "text" : "password";

	const errors = useStore(field.store, (state) => state.meta.errors);

	return (
		<Field data-invalid={errors.length > 0}>
			<FieldLabel className="basis-1/3">{label}</FieldLabel>

			<div className="relative">
				<Input
					type={inputType}
					className="basis-2/3"
					value={field.state.value}
					onChange={(e) => field.handleChange(e.target.value)}
					onBlur={field.handleBlur}
					aria-invalid={errors.length > 0}
					autoComplete={autoComplete ?? ""}
				/>
				{isPasswordType && (
					<Button
						variant="ghost"
						size="icon"
						className="absolute top-0 right-0"
						onClick={() => setShowPassword(!showPassword)}
					>
						{showPassword ? <EyeClosedIcon /> : <EyeIcon />}
					</Button>
				)}
			</div>

			{errors.length > 0 && (
				<FieldError errors={errors.map((err) => ({ message: err }))} />
			)}
		</Field>
	);
}
