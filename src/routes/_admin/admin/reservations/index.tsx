import {
  ArrowDownIcon,
  ArrowUpIcon,
  BookIcon,
  CheckIcon,
  ChecksIcon,
  HandArrowDownIcon,
  HandArrowUpIcon,
  HourglassIcon,
  XIcon,
} from "@phosphor-icons/react";
import { createFileRoute } from "@tanstack/react-router";
import type { BorrowedBook } from "@/features/reservation/model/borrowedBook";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent, CardHeader } from "@/shared/components/ui/card";
import { Checkbox } from "@/shared/components/ui/checkbox";
import { Separator } from "@/shared/components/ui/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/components/ui/tabs";

export const Route = createFileRoute("/_admin/admin/reservations/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="px-7 pt-7 xl:px-24 bg-white h-dvh">
      <h2 className="font-bold text-xl mb-7">Reservations & Borrowing</h2>

      <Tabs defaultValue="pending">
        <TabsList className="w-full sm:w-fit overflow-x-auto justify-start mb-3">
          <TabsTrigger value="pending">Pending (1)</TabsTrigger>
          <TabsTrigger value="confirmed">Confirmed</TabsTrigger>
          <TabsTrigger value="borrowed">Borrowed</TabsTrigger>
          <TabsTrigger value="returned">Returned</TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-3">
          <ReservationCard
            status="pending"
            bookId="123"
            bookName="Dessert Island"
            borrowerName="Fanny"
            borrowerPhoneNumber="62866234234"
          />
        </TabsContent>

        <TabsContent value="confirmed" className="space-y-3">
          <ReservationCard
            status="confirmed"
            bookId="123"
            bookName="Dessert Island"
            borrowerName="Fanny"
            borrowerPhoneNumber="62866234234"
          />
        </TabsContent>

        <TabsContent value="borrowed" className="space-y-3">
          <ReservationCard
            status="borrowed"
            bookId="123"
            bookName="Dessert Island"
            borrowerName="Fanny"
            borrowerPhoneNumber="62866234234"
          />
        </TabsContent>

        <TabsContent value="returned" className="space-y-3">
          <ReservationCard
            status="returned"
            bookId="123"
            bookName="Dessert Island"
            borrowerName="Fanny"
            borrowerPhoneNumber="62866234234"
          />
        </TabsContent>
      </Tabs>
    </main>
  );
}

type ReservationCardProps = {
  status: "pending" | "confirmed" | "borrowed" | "returned";
  bookName: string;
  bookId: string;
  borrowerName: string;
  borrowerPhoneNumber: string;
};

function PendingAction() {
  return (
    <>
      <Button variant="ghost" size="icon-sm">
        <CheckIcon className="fill-success size-5" weight="bold" />
      </Button>
      <Button variant="ghost" size="icon-sm">
        <XIcon className="fill-destructive size-5" weight="bold" />
      </Button>
    </>
  );
}

function ConfirmAction() {
  return (
    <Button size="sm" className="gap-0">
      <BookIcon className="size-5" weight="bold" />
      <ArrowUpIcon className="size-5" weight="bold" />
    </Button>
  );
}

function ReturnAction() {
  return (
    <Button size="sm" className="gap-0">
      <BookIcon className="size-5" weight="bold" />
      <ArrowDownIcon className="size-5" weight="bold" />
    </Button>
  );
}

function ReservationCard({
  bookId,
  bookName,
  borrowerName,
  borrowerPhoneNumber,
  status,
}: ReservationCardProps) {
  return (
    <Card className="py-2 gap-0">
      <CardHeader className="px-4">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            {/*<Checkbox className="size-5" />*/}
            <p className="font-semibold">{bookName}</p>
            <p className="text-muted-foreground text-sm">{bookId}</p>
          </div>

          <div className="flex gap-3">
            {(() => {
              switch (status) {
                case "pending":
                  return <PendingAction />;
                case "confirmed":
                  return <ConfirmAction />;
                case "borrowed":
                  return <ReturnAction />;
              }
            })()}
          </div>
        </div>
      </CardHeader>

      <Separator />

      <CardContent className="pt-2 px-4">
        <div className="grid grid-cols-2 gap-2">
          <p className="text-muted-foreground font-medium text-sm">Borrower</p>
          <p className="text-sm">{borrowerName}</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <p className="text-muted-foreground font-medium text-sm">Contact</p>
          <p className="text-sm">{borrowerPhoneNumber}</p>
        </div>

        {status === "borrowed" && (
          <>
            <div className="grid grid-cols-2 gap-2">
              <p className="text-muted-foreground font-medium text-sm">
                Borrow Date
              </p>
              <p className="text-sm">25 Jan 26</p>
            </div>
            <div className="grid grid-cols-2 gap-2 items-center">
              <p className="text-muted-foreground font-medium text-sm">
                Borrow Condition
              </p>
              <p className="text-sm">Good</p>
            </div>
          </>
        )}

        {status === "returned" && (
          <>
            <div className="grid grid-cols-2 gap-2">
              <p className="text-muted-foreground font-medium text-sm">
                Return Date
              </p>
              <p className="text-sm">10 Feb 26</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <p className="text-muted-foreground font-medium text-sm">
                Return Condition
              </p>
              <p className="text-sm">Good</p>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
