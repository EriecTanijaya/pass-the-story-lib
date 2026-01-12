import { EyeIcon, MagnifyingGlassIcon } from "@phosphor-icons/react";
import { createFileRoute } from "@tanstack/react-router";
import { Drawer } from "vaul";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/shared/components/ui/accordion";
import { Button } from "@/shared/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/shared/components/ui/card";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@/shared/components/ui/input-group";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/shared/components/ui/select";
import { Separator } from "@/shared/components/ui/separator";

export const Route = createFileRoute("/_admin/admin/books/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="px-7 pt-7 xl:px-24 bg-white h-dvh">
			<div className="mb-7">
				<h2 className="font-bold text-xl">Book Inventory</h2>
				<div className="flex flex-col mt-7 gap-2">
					<InputGroup>
						<InputGroupInput />
						<InputGroupAddon>
							<MagnifyingGlassIcon />
						</InputGroupAddon>
					</InputGroup>

					<Select>
						<SelectTrigger>
							<SelectValue placeholder="All Status" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Status</SelectLabel>
								<SelectItem value="all">All Status</SelectItem>
								<SelectItem value="to_be_confirmed">To be Confirmed</SelectItem>
								<SelectItem value="confirmed">Confirmed</SelectItem>
								<SelectItem value="borrowed">Borrowed</SelectItem>
								<SelectItem value="available">Available</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
			</div>

			<Button className="mb-5 w-full">Add Book</Button>

			<section className="space-y-3">
				<BookCard
					id="123"
					condition="Fair"
					genre="Psychology"
					name="What is Happines"
					status="To be Confirmed"
					donor="George"
					isbn="123123123"
				/>
			</section>
		</main>
	);
}

type BookCardProps = {
	id: string;
	name: string;
	genre: string;
	condition: string;
	status: string;
	donor: string;
	isbn: string;
};

function BookCard({
	id,
	condition,
	genre,
	name,
	status,
	donor,
	isbn,
}: BookCardProps) {
	return (
		<Card className="py-2 gap-0">
			<CardHeader className="px-4">
				<div className="flex justify-between items-center">
					<div>
						<CardTitle className="font-semibold">{name}</CardTitle>
						<CardDescription>{id}</CardDescription>
					</div>

					<BookDetailsDrawer />
				</div>
			</CardHeader>

			<Separator />

			<CardContent className="px-4 pt-2">
				<div className="grid grid-cols-2 gap-2">
					<p className="text-muted-foreground font-medium text-sm">ISBN</p>
					<p className="text-sm font-mono">{isbn}</p>
				</div>
				<div className="grid grid-cols-2 gap-2">
					<p className="text-muted-foreground font-medium text-sm">Genre</p>
					<p className="text-sm">{genre}</p>
				</div>
				<div className="grid grid-cols-2 gap-2">
					<p className="text-muted-foreground font-medium text-sm">Condition</p>
					<p className="text-sm">{condition}</p>
				</div>
				<div className="grid grid-cols-2 gap-2">
					<p className="text-muted-foreground font-medium text-sm">Status</p>
					<p className="text-sm">{status}</p>
				</div>
				<div className="grid grid-cols-2 gap-2">
					<p className="text-muted-foreground font-medium text-sm">Donor</p>
					<p className="text-sm">{donor}</p>
				</div>
			</CardContent>
		</Card>
	);
}

function BookDetailsDrawer() {
	return (
		<Drawer.Root>
			<Drawer.Trigger asChild>
				<Button variant="ghost" size="icon-sm">
					<EyeIcon className="size-5" weight="bold" />
				</Button>
			</Drawer.Trigger>

			<Drawer.Portal>
				<Drawer.Overlay className="fixed inset-0 bg-black/40" />

				<Drawer.Content className="flex flex-col rounded-t-lg h-[80%] fixed left-0 right-0 bottom-0">
					<div className="p-4 bg-white rounded-t-[10px] flex-1 overflow-y-auto">
						<Drawer.Handle className="mb-8" />

						<div className="flex flex-col gap-3">
							<img
								src="/portrait.jpg"
								alt="book"
								className="h-57 w-1/2 object-cover mx-auto"
							/>

							<div>
								<h3 className="font-semibold text-xl">1984</h3>
								<p className="text-muted-foreground text-sm">George Orwell</p>
							</div>

							<div className="grid grid-cols-2 space-y-2">
								<div className="flex flex-col">
									<p className="font-medium text-sm text-muted-foreground">
										Book ID
									</p>
									<p className="font-mono text-sm">123123</p>
								</div>

								<div className="flex flex-col">
									<p className="font-medium text-sm text-muted-foreground">
										ISBN
									</p>
									<p className="text-sm font-mono">123123123</p>
								</div>

								<div className="flex flex-col">
									<p className="font-medium text-sm text-muted-foreground">
										Genre
									</p>
									<p className="text-sm">Fiction</p>
								</div>

								<div className="flex flex-col">
									<p className="font-medium text-sm text-muted-foreground">
										Language
									</p>
									<p className="text-sm">English</p>
								</div>

								<div className="flex flex-col">
									<p className="font-medium text-sm text-muted-foreground">
										Tags
									</p>
									<p className="text-sm">Politic, Dystopian, Social Science</p>
								</div>

								<div className="flex flex-col">
									<p className="font-medium text-sm text-muted-foreground">
										Condition
									</p>
									<p className="text-sm">Good</p>
								</div>

								<div className="flex flex-col">
									<p className="font-medium text-sm text-muted-foreground">
										Status
									</p>
									<p className="text-sm">To be Confirmed</p>
								</div>

								<div className="flex flex-col">
									<p className="font-medium text-sm text-muted-foreground">
										Donor
									</p>
									<p className="text-sm">Ivy</p>
								</div>
							</div>

							<Separator />

							<Accordion type="single" collapsible>
								<AccordionItem value="synopsis">
									<AccordionTrigger className="font-medium text-base">
										Synopsis
									</AccordionTrigger>
									<AccordionContent>
										Venture into the hamowing world of George Orwell dystopian
										masterpίcus, "1994." Set is the oppressive superstans of
										Corana, thịt chilling nowed introduum readers to Winston
										Smith, a min sruggling to maintain his humanity in a susiety
										zaled by the ever watchtul Big Brother. At Winston becomes
										increasingly disillusioned with the Party's brutal contrats
										every aspect of life, he finds solace in a secret love
										atfair with the enigmatic Julia, putting both of them in the
										cronheits of an unforgiving regime 1966 aplies themes of
										totalitarianists, censorshup, and the power of language,
										offering a stark warning against the danger of abulum
										authority and the crusion of individual freedom. Wahus
										prophene maghen and haunting mion of a world where the muth
										it mangulated and dusent is crushed, Orwell's powerful
										narrative chillling reminder of the fragility of freedom and
										the for vigilance in the face of tyranny. Prepare to be
										challenged. fimurived, and ultimame moved by the thought
										provoking clam that continues to resonate with readers acrow
										generations.
									</AccordionContent>
								</AccordionItem>
							</Accordion>

							<Separator />

							<div>
								<h3 className="font-medium">Book Conditions</h3>

								<ul className="list-disc list-inside">
									<li>Ripped on page no. 24</li>
									<li>Drawing on page no. 50</li>
									<li>
										Something really horrible happen, the page is burned, the
										ash is falling, the things is going out of the way
									</li>
								</ul>
							</div>
						</div>
					</div>
				</Drawer.Content>
			</Drawer.Portal>
		</Drawer.Root>
	);
}
