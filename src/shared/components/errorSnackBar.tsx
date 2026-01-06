import { WarningIcon, XIcon } from "@phosphor-icons/react";
import type { Dispatch, SetStateAction } from "react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

type ErrorSnackBarProps = {
	error: string;
	setError: Dispatch<SetStateAction<string>>;
};

export function ErrorSnackBar({ error, setError }: ErrorSnackBarProps) {
	return (
		error && (
			<Alert variant="destructive" className="mb-3">
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
		)
	);
}
