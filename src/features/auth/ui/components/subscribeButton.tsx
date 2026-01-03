import { Button } from "@/shared/components/ui/button";
import { Spinner } from "@/shared/components/ui/spinner";
import { useFormContext } from "../../signIn/model/formContext";

export function SubscribeButton({ label }: { label: string }) {
	const form = useFormContext();

	return (
		<form.Subscribe selector={(state) => state.isSubmitting}>
			{(isSubmitting) => {
				return (
					<Button className="w-full mt-7" disabled={isSubmitting}>
						{(() => {
							if (isSubmitting) {
								return (
									<>
										<Spinner />
										Loading...
									</>
								);
							}

							return <>{label}</>;
						})()}
					</Button>
				);
			}}
		</form.Subscribe>
	);
}
