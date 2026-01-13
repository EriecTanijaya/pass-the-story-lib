import { Button } from "@/shared/components/ui/button";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/shared/components/ui/tabs";
import { ReservationCard } from "../components/reservationCard";

export function ReservationCardList() {
	return (
		<section className="md:hidden">
			<Button className="mb-5 w-full">Add Borrow</Button>

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
		</section>
	);
}
