import { createFileRoute } from "@tanstack/react-router";
import { ReservationDataTable } from "@/features/reservation/ui/desktop/reservationDataTable";
import { ReservationCardList } from "@/features/reservation/ui/mobile/reservationCardList";

export const Route = createFileRoute("/_admin/admin/reservations/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="px-7 pt-7 xl:px-24 bg-white h-dvh">
			<h2 className="font-bold text-xl mb-7">Reservations & Borrowing</h2>

			<ReservationCardList />

			<ReservationDataTable />
		</main>
	);
}
