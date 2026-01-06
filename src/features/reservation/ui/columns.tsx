import { DotsThreeIcon } from "@phosphor-icons/react";
import { createColumnHelper } from "@tanstack/react-table";
import { Button } from "@/shared/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import type { BorrowedBook } from "../model/borrowedBook";

const columnHelper = createColumnHelper<BorrowedBook>();

export const borrowedBookColumns = [
	columnHelper.accessor("bookName", {
		header: () => "Book",
	}),
	columnHelper.accessor("borrowerName", {
		header: () => "Borrower",
	}),
	columnHelper.accessor("phoneNumber", {
		header: () => "Contact",
	}),
	columnHelper.accessor("borrowDate", {
		header: () => "Borrow Date",
	}),
	columnHelper.display({
		id: "actions",
		cell: ({ row }) => {
			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost">
							<DotsThreeIcon />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem>View</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	}),
];
