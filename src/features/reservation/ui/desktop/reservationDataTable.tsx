import { CheckIcon, XIcon } from "@phosphor-icons/react";
import { Button } from "@/shared/components/ui/button";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/shared/components/ui/table";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/shared/components/ui/tabs";

export function ReservationDataTable() {
	return (
		<section className="hidden md:block">
			<Tabs defaultValue="pending">
				<div className="flex justify-between">
					<TabsList className="w-full sm:w-fit overflow-x-auto justify-start mb-3">
						<TabsTrigger value="pending">Pending (1)</TabsTrigger>
						<TabsTrigger value="confirmed">Confirmed</TabsTrigger>
						<TabsTrigger value="borrowed">Borrowed</TabsTrigger>
						<TabsTrigger value="returned">Returned</TabsTrigger>
					</TabsList>

					<Button>Add Borrow</Button>
				</div>

				<TabsContent value="pending" className="space-y-3">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Book Name</TableHead>
								<TableHead>Book ID</TableHead>
								<TableHead>Borrower Name</TableHead>
								<TableHead>Borrower Contact</TableHead>
								<TableHead>Actions</TableHead>
							</TableRow>
						</TableHeader>

						<TableBody>
							<TableRow>
								<TableCell>The Stand</TableCell>
								<TableCell>123123</TableCell>
								<TableCell>Houston</TableCell>
								<TableCell>6254123098</TableCell>
								<TableCell className="flex gap-1">
									<Button variant="ghost" size="icon-sm">
										<CheckIcon className="fill-success size-5" weight="bold" />
									</Button>
									<Button variant="ghost" size="icon-sm">
										<XIcon className="fill-destructive size-5" weight="bold" />
									</Button>
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TabsContent>

				<TabsContent value="confirmed" className="space-y-3"></TabsContent>

				<TabsContent value="borrowed" className="space-y-3"></TabsContent>

				<TabsContent value="returned" className="space-y-3"></TabsContent>
			</Tabs>
		</section>
	);
}
