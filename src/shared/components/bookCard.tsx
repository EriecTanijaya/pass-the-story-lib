import { TagIcon, TranslateIcon } from "@phosphor-icons/react";
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

interface BookCardProps {
	thumbnailUrl: string;
	bookName: string;
	authorName: string;
	genre: string;
	language: string;
	tags?: string[];
}

export function BookCard({
	authorName,
	bookName,
	genre,
	language,
	tags,
	thumbnailUrl,
}: BookCardProps) {
	return (
		<Card className="flex flex-col bg-white pt-0 w-full md:w-[280px] first:ml-7 last:mr-7">
			<CardHeader className="p-0 relative">
				<img
					src={thumbnailUrl}
					alt="book"
					className="w-full h-48 object-cover rounded-t-lg"
				/>
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

				<Button variant="outline" className="flex-1">
					View Details
				</Button>
			</CardFooter>
		</Card>
	);
}
