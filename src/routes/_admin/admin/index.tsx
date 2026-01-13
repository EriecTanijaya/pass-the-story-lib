import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardTitle } from "@/shared/components/ui/card";

export const Route = createFileRoute("/_admin/admin/")({
	component: RouteComponent,
	beforeLoad: async ({ context }) => {
		// const canReadBook = authClient.admin.checkRolePermission({
		//   permission: {
		//     book: ["read"],
		//   },
		//   role: context.user?.role as Role,
		// });
		//
	},
});

function RouteComponent() {
	return (
		<main className="flex flex-col p-7 xl:px-24 bg-white gap-3 h-dvh">
			<section>
				<h2 className="font-bold text-xl mb-4">Admin Dashboard</h2>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
					<Card>
						<CardContent className="flex flex-col gap-4">
							<CardTitle>Pending Reservations</CardTitle>
							<div className="flex gap-2 items-baseline">
								<p className="font-bold text-xl">0</p>
								<p className="text-muted-foreground text-sm">
									Awaiting Confirmation
								</p>
							</div>
						</CardContent>
					</Card>

					<Card>
						<CardContent className="flex flex-col gap-4">
							<CardTitle>Upcoming Meetups</CardTitle>
							<div className="flex gap-2 items-baseline">
								<p className="font-bold text-xl">1</p>
								<p className="text-muted-foreground text-sm">Scheduled</p>
							</div>
						</CardContent>
					</Card>
				</div>
			</section>

			{/*<section>
        <h2 className="font-bold text-xl mb-4">Recent Reservations</h2>


      </section>*/}
		</main>
	);
}
