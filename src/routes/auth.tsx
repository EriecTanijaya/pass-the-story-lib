import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/shared/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/shared/components/ui/card";

export const Route = createFileRoute("/auth")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="p-7">
			<Card>
				<CardHeader>
					<CardTitle>Welcome to Pass The Story Library</CardTitle>
					<CardDescription>
						Sign in to your account or create a new one
					</CardDescription>
				</CardHeader>
				<CardContent></CardContent>
				<CardFooter>
					<Button>Sign In</Button>
				</CardFooter>
			</Card>
		</main>
	);
}
