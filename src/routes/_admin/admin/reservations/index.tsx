import { createFileRoute } from "@tanstack/react-router";
import type { BorrowedBook } from "@/features/reservation/model/borrowedBook";
import { borrowedBookColumns } from "@/features/reservation/ui/columns";
import { DataTable } from "@/features/reservation/ui/data-table";

export const Route = createFileRoute("/_admin/admin/reservations/")({
	component: RouteComponent,
});

export const borrowedBooks: BorrowedBook[] = [
	{
		bookName: "The Jagger",
		borrowerName: "Karlo",
		phoneNumber: "123",
		borrowDate: "16 Dec 2025",
	},
	{
		bookName: "The Gfws",
		borrowerName: "lpopi",
		phoneNumber: "321",
		borrowDate: "25 Sep 2025",
	},
	{
		bookName: "Crawling hsgger",
		borrowerName: "dresa",
		phoneNumber: "456",
		borrowDate: "04 Jan 2025",
	},
];

function RouteComponent() {
	return (
		<main className="px-7 pt-7 xl:px-24">
			<h2 className="font-bold text-xl mb-7">Reservations & Borrowing</h2>
			<DataTable columns={borrowedBookColumns} data={borrowedBooks} />
		</main>
	);
}
