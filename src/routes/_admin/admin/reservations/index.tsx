import { CheckIcon, XIcon } from "@phosphor-icons/react";
import { createFileRoute } from "@tanstack/react-router";
import type { BorrowedBook } from "@/features/reservation/model/borrowedBook";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent, CardHeader } from "@/shared/components/ui/card";
import { Checkbox } from "@/shared/components/ui/checkbox";
import { Separator } from "@/shared/components/ui/separator";

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
		<main className="px-7 pt-7 xl:px-24 bg-white h-dvh">
			<h2 className="font-bold text-xl mb-7">Reservations & Borrowing</h2>

			<Card className="py-2 gap-0">
				<CardHeader className="px-4">
					<div className="flex justify-between">
						<div className="flex gap-3 items-center">
							<Checkbox className="size-5" />
							<p className="font-semibold">Book Name</p>
						</div>

						<div className="flex gap-3">
							<Button variant="ghost" size="icon-sm">
								<CheckIcon className="fill-success size-5" weight="bold" />
							</Button>
							<Button variant="ghost" size="icon-sm">
								<XIcon className="fill-destructive size-5" weight="bold" />
							</Button>
						</div>
					</div>
				</CardHeader>

				<Separator />
				<CardContent className="pt-2">
					<div className="grid grid-cols-2 gap-2">
						<p className="text-muted-foreground font-medium w-">Borrower</p>
						<p>Koka Loka</p>
					</div>
					<div className="grid grid-cols-2 gap-2">
						<p className="text-muted-foreground font-medium w-">Contact</p>
						<p>6277123123</p>
					</div>
					<div className="grid grid-cols-2 gap-2">
						<p className="text-muted-foreground font-medium">Borrow Date</p>
						<p>25 Jan 26</p>
					</div>
				</CardContent>
			</Card>
		</main>
	);
}
