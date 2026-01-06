import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BookCard } from "@/shared/components/bookCard";
import { Button } from "@/shared/components/ui/button";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@/shared/components/ui/input-group";
import {
	MultiSelect,
	MultiSelectContent,
	MultiSelectGroup,
	MultiSelectItem,
	MultiSelectTrigger,
	MultiSelectValue,
} from "@/shared/components/ui/multi-select";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/shared/components/ui/select";

export const Route = createFileRoute("/_member/books/")({
	component: RouteComponent,
});

const defaultFilters = {
	search: "",
	genres: [] as string[],
	language: "all",
};

function RouteComponent() {
	const [filters, setFilters] = useState(defaultFilters);

	function updateSearchQuery(searchQuery: string) {
		setFilters({
			...filters,
			search: searchQuery,
		});
	}

	function updateGenreQuery(genres: string[]) {
		setFilters({
			...filters,
			genres,
		});
	}

	function updateLanguageQuery(lang: string) {
		setFilters({
			...filters,
			language: lang,
		});
	}

	function deleteFilters() {
		setFilters(defaultFilters);
	}

	const hasFilter =
		filters.search !== "" ||
		filters.genres.length !== 0 ||
		filters.language !== "all";

	return (
		<main className="flex flex-col pt-7 xl:px-24 bg-white">
			<div className="px-7 pb-7 xl:px-0">
				<h2 className="font-bold text-xl">Browse Books</h2>
				<div className="flex flex-col mt-7 gap-2">
					<InputGroup className="bg-white">
						<InputGroupInput
							className="text-sm"
							placeholder="Search by title, author, or ISBN..."
							onChange={(e) => updateSearchQuery(e.target.value)}
							value={filters.search}
						/>
						<InputGroupAddon>
							<MagnifyingGlassIcon />
						</InputGroupAddon>
					</InputGroup>

					<MultiSelect
						onValuesChange={(values) => updateGenreQuery(values)}
						values={filters.genres}
					>
						<MultiSelectTrigger className="bg-white">
							<MultiSelectValue
								overflowBehavior="wrap"
								placeholder="All Genres"
							/>
						</MultiSelectTrigger>
						<MultiSelectContent>
							<MultiSelectGroup>
								<MultiSelectItem value="fiction">Fiction</MultiSelectItem>
								<MultiSelectItem value="nonFiction">
									Non Fiction
								</MultiSelectItem>
								<MultiSelectItem value="mystery">Mystery</MultiSelectItem>
							</MultiSelectGroup>
						</MultiSelectContent>
					</MultiSelect>

					<Select
						onValueChange={(value) => updateLanguageQuery(value)}
						value={filters.language}
					>
						<SelectTrigger className="bg-white">
							<SelectValue placeholder="All Languages" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Languages</SelectLabel>
								<SelectItem value="all">All Languages</SelectItem>
								<SelectItem value="indonesia">Indonesia</SelectItem>
								<SelectItem value="english">English</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>

					{hasFilter && (
						<Button
							variant="destructive"
							size="sm"
							onClick={() => deleteFilters()}
						>
							Clear Filters
						</Button>
					)}
				</div>
			</div>

			<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-7 pb-12 gap-7 xl:px-0">
				<BookCard
					authorName="joji"
					bookName="wormhole"
					genre="mystery"
					language="english"
					tags={["gore"]}
				/>
				<BookCard
					authorName="joji"
					bookName="wormhole"
					genre="mystery"
					language="english"
					tags={["gore"]}
					thumbnailUrl="landscape.jpg"
				/>
				<BookCard
					authorName="joji"
					bookName="wormhole"
					genre="mystery"
					language="english"
					tags={["gore"]}
					thumbnailUrl="portrait.jpg"
				/>
			</section>
		</main>
	);
}
