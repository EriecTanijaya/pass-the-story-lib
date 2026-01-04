import { createFileRoute } from "@tanstack/react-router";
import { SignUpForm } from "@/features/auth/register/ui/signUpForm";
import { SignInForm } from "@/features/auth/signIn/ui/signInForm";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/shared/components/ui/card";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/shared/components/ui/tabs";

export const Route = createFileRoute("/auth/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="flex items-center justify-center h-dvh p-5">
			<Card className="w-md overflow-auto h-full md:max-h-fit md:w-lg">
				<CardHeader className="justify-items-center">
					<img src="/pts-logo.png" alt="logo" className="size-18 mb-5" />
					<CardTitle>Welcome to Pass The Story Library</CardTitle>
					<CardDescription>
						Sign in to your account or create a new one
					</CardDescription>
				</CardHeader>

				<CardContent>
					<Tabs defaultValue="sign-in" className="items-center">
						<TabsList className="mb-7 w-full">
							<TabsTrigger value="sign-in">Sign In</TabsTrigger>
							<TabsTrigger value="sign-up">Sign Up</TabsTrigger>
						</TabsList>

						<TabsContent value="sign-up" className="w-full">
							<SignUpForm />
						</TabsContent>

						<TabsContent value="sign-in" className="w-full">
							<SignInForm />
						</TabsContent>
					</Tabs>
				</CardContent>
			</Card>
		</main>
	);
}
