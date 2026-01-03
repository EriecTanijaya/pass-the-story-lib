import { useStore } from "@tanstack/react-form";
import { Field, FieldError, FieldLabel } from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import { useFieldContext } from "../../model/formContext";

type TextFieldProps = {
	label: string;
	type: "text" | "password";
};

export function TextField({ label, type }: TextFieldProps) {
	const field = useFieldContext<string>();

	const errors = useStore(field.store, (state) => state.meta.errors);

	return (
		<Field data-invalid={errors.length > 0}>
			<FieldLabel className="basis-1/3">{label}</FieldLabel>
			<Input
				type={type}
				className="basis-2/3"
				value={field.state.value}
				onChange={(e) => field.handleChange(e.target.value)}
				onBlur={field.handleBlur}
				aria-invalid={errors.length > 0}
			/>
			{errors.length > 0 && (
				<FieldError errors={errors.map((err) => ({ message: err }))} />
			)}
		</Field>
	);
}
