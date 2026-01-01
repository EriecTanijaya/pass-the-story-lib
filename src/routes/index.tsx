import {
	ArrowUpRightIcon,
	BellIcon,
	BookOpenIcon,
	CalendarIcon,
	ClockIcon,
	EnvelopeIcon,
	type Icon,
	MagnifyingGlassIcon,
	MapPinIcon,
	SparkleIcon,
	UsersIcon,
} from "@phosphor-icons/react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { BookCard } from "@/shared/components/bookCard";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/shared/components/ui/card";

export const Route = createFileRoute("/")({ component: App });

const books = [
	{
		authorName: "leila",
		bookName: "shadow",
		genre: "fiction",
		language: "english",
		thumbnailUrl: "/landscape.jpg",
		tags: ["gore", "mystery"],
	},
	{
		authorName: "shoho",
		bookName: "klorin",
		genre: "non fiction",
		language: "idno",
		thumbnailUrl: "/portrait.jpg",
		tags: ["happy", "mystery"],
	},
	{
		authorName: "reina",
		bookName: "flower",
		genre: "romance",
		language: "english",
		thumbnailUrl: "",
		tags: ["happy", "sad"],
	},
];

const howToSteps: Omit<HowToCardProps, "stepNum">[] = [
	{
		title: "Browse & Reserve",
		details:
			"Find a book you love and reserve it up to 2 days before the meetup.",
		StepIcon: MagnifyingGlassIcon,
	},
	{
		title: "Get Confirmation",
		details:
			" Receive an message through email or whatsapp with meetup details once your reservation is confirmed",
		StepIcon: EnvelopeIcon,
	},
	{
		title: "Meet & Borrow",
		details: "Pick up your book at the meetup and connect with fellow readers.",
		StepIcon: UsersIcon,
	},
	{
		title: "Read & Return",
		details:
			"Enjoy your book and return it at the next meetup. Earn karma points!",
		StepIcon: BookOpenIcon,
	},
];

function App() {
	return (
		<main className="flex flex-col gap-6 bg-white xl:px-24">
			<section className="flex flex-col bg-primary px-7 gap-3 items-center py-20">
				<div className="flex rounded-full text-sm px-4 py-2 bg-primary-foreground/10 text-primary-foreground/90 mb-9 gap-2 items-center">
					<SparkleIcon className="size-4" />
					Community-powered book sharing
				</div>
				<h1 className="text-4xl font-bold tracking-tight text-primary-foreground">
					Read, Share, and Connect
				</h1>
				<p className="text-primary-foreground/80">
					Imagine borrowing books shared by fellow members.
				</p>

				<div className="grid grid-cols-2 gap-3 mt-9">
					<Button
						variant="secondary"
						size="lg"
						className="bg-primary-foreground text-primary font-semibold shadow-lg w-full"
						asChild
					>
						<Link to="/books">Browse Books</Link>
					</Button>
					<Button
						variant="outline"
						size="lg"
						className="border-2 border-primary-foreground/30 bg-transparent text-primary-foreground"
						onClick={() => {
							const element = document.getElementById("how-it-works");
							if (!element) return;

							window.scrollTo({
								top: element.offsetTop - 80,
								behavior: "smooth",
							});
						}}
					>
						How It Works
					</Button>
				</div>
			</section>

			<section>
				<h2 className="text-xl font-bold ml-7 mb-9 xl:ml-0">Featured Books</h2>
				<div className="flex overflow-auto gap-3">
					{books.map((book) => (
						<BookCard key={book.bookName} {...book} variant="carousel" />
					))}
				</div>
			</section>

			{/** biome-ignore lint/correctness/useUniqueElementIds: <explanation> */}
			<section className="px-7 xl:px-0" id="how-it-works">
				<h2 className="text-xl font-bold mb-9">How It Works</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-7">
					{howToSteps.map((step, idx) => (
						<HowToCard key={step.title} {...step} stepNum={idx + 1} />
					))}
				</div>
			</section>

			<section className="px-7 pb-12 xl:px-0">
				<h2 className="text-xl font-bold mb-9">Upcoming Meetup</h2>

				<Card className="md:w-96">
					<CardHeader>
						<CardTitle>Luar Garis Cafe</CardTitle>
					</CardHeader>
					<CardContent className="grid grid-cols-1 gap-2">
						<div className="flex flex-col gap-2">
							<div className="flex gap-2 items-center">
								<div className="flex justify-center items-center rounded-lg size-8 bg-background">
									<CalendarIcon className="size-5 fill-primary" />
								</div>
								<div>
									<h3 className="text-muted-foreground text-sm">Date</h3>
									<p className="font-semibold">12 December 2025</p>
								</div>
							</div>

							<div className="flex gap-2 items-center">
								<div className="flex justify-center items-center rounded-lg size-8 bg-background">
									<ClockIcon className="size-5 fill-primary" />
								</div>
								<div>
									<h3 className="text-muted-foreground text-sm">Time</h3>
									<p className="font-semibold">16:00 - 18:00 WIB</p>
								</div>
							</div>

							<div className="flex gap-2 items-center">
								<div className="flex justify-center items-center rounded-lg size-8 bg-background">
									<MapPinIcon className="size-6 fill-primary" />
								</div>
								<div>
									<h3 className="text-muted-foreground text-sm">Place</h3>
									<a
										href="https://maps.app.goo.gl/mbsG3TRHFVLajQBX9"
										className="font-semibold inline-flex text-primary underline-offset-4 hover:underline gap-1 items-center"
									>
										Luar Garis Coffee Tiban
										<ArrowUpRightIcon />
									</a>
								</div>
							</div>
						</div>

						<div className="border-t py-4 border-b">
							<h3 className="font-bold text-2xl text-primary">42</h3>
							<p className="text-sm text-muted-foreground">Books Available</p>
						</div>

						<div className="flex gap-1">
							<BellIcon className="size-5 fill-primary" />
							<h3 className="text-muted-foreground text-sm">
								Reservation deadline:
								<span className="font-semibold text-foreground">
									{" "}
									19 December 2025
								</span>
							</h3>
						</div>
					</CardContent>
					<CardFooter className="gap-4">
						<Button asChild>
							<Link to="/books">Reserve</Link>
						</Button>
					</CardFooter>
				</Card>
			</section>
		</main>
	);
}

interface HowToCardProps {
	stepNum: number;
	title: string;
	details: string;
	StepIcon: Icon;
}

function HowToCard({ details, StepIcon, title, stepNum }: HowToCardProps) {
	return (
		<Card className="relative">
			<Badge className="absolute -top-3 -left-3 size-8 text-sm font-bold">
				{stepNum}
			</Badge>
			<CardHeader>
				<div className="size-14 flex items-center justify-center bg-secondary rounded-xl mb-4">
					<StepIcon className="size-7 fill-primary" />
				</div>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{details}</CardDescription>
			</CardHeader>
		</Card>
	);
}
