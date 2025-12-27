import { BookOpenIcon, TagIcon, TranslateIcon } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/card";

const bookCardVariants = cva("flex flex-col bg-white pt-0 w-full", {
	variants: {
		variant: {
			default: "",
			carousel: "first:ml-7 last:mr-7",
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

type BookCardProps = {
	bookName: string;
	authorName: string;
	genre: string;
	language: string;
	thumbnailUrl?: string;
	tags?: string[];
	variant?: string;
} & VariantProps<typeof bookCardVariants>;

export function BookCard({
	authorName,
	bookName,
	genre,
	language,
	tags,
	thumbnailUrl,
	variant = "default",
}: BookCardProps) {
	return (
		<Card className={cn(bookCardVariants({ variant }))}>
			<CardHeader className="p-0 relative">
				{thumbnailUrl ? (
					<img
						src={thumbnailUrl}
						alt="book"
						className="w-full h-74 object-cover rounded-t-xl"
					/>
				) : (
					<div className="h-74 flex items-center justify-center p-12 bg-book-card-thumbnail rounded-t-lg">
						<BookOpenIcon className="size-20 fill-primary" />
					</div>
				)}
			</CardHeader>
			<CardContent className="flex flex-col gap-2">
				<CardTitle>{bookName}</CardTitle>
				<CardDescription>{authorName}</CardDescription>

				<div className="flex gap-2 text-xs text-muted-foreground">
					<span className="flex gap-1 items-center">
						<TagIcon className="h-3 w-3 fill-gray-800" />
						{genre}
					</span>
					<span className="flex gap-1 items-center">
						<TranslateIcon className="h-3 w-3 fill-gray-800" />
						{language}
					</span>
				</div>

				{(() => {
					if (!tags || tags.length === 0) {
						return;
					}

					return (
						<div className="flex gap-2">
							{tags.map((tag) => (
								<Badge key={tag} variant="secondary">
									{tag}
								</Badge>
							))}
						</div>
					);
				})()}
			</CardContent>

			<CardFooter className="gap-4">
				<Button className="flex-1">Reserve</Button>

				<Button variant="outline" className="flex-1" asChild>
					<Link to="/books/1">View Details</Link>
				</Button>
			</CardFooter>
		</Card>
	);
}
