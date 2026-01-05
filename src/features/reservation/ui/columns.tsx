import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { BorrowedBook } from "../model/borrowedBook";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { Button } from "@/shared/components/ui/button";
import { DotsThreeIcon } from "@phosphor-icons/react";

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
