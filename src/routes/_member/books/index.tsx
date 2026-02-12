import {
  BookIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  PenIcon,
} from "@phosphor-icons/react";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BookCard } from "@/shared/components/bookCard";
import { Drawer } from "@/shared/components/drawer";
import { Button } from "@/shared/components/ui/button";
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
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/shared/components/ui/toggle-group";
import { Field, FieldLabel } from "@/shared/components/ui/field";

export const Route = createFileRoute("/_member/books/")({
  component: RouteComponent,
});

type SelectVal = {
  label: string;
  value: string;
};

const genres: SelectVal[] = [
  { label: "Mystery", value: "mystery" },
  { label: "Crime", value: "crime" },
];

const languages: SelectVal[] = [
  {
    label: "Indonesia",
    value: "indonesia",
  },
  {
    label: "English",
    value: "english",
  },
];

const defaultFilters = {
  search: "",
  genres: [] as string[],
  language: "",
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
    filters.language !== "";

  return (
    <main className="flex flex-col pt-7 xl:px-24 bg-white">
      <div className="px-7 pb-7 xl:px-0">
        <h2 className="font-bold text-xl">Browse Books</h2>

        <div className="mt-7 flex gap-2 justify-between items-center">
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

          <FilterDrawer />
        </div>

        <div className="flex flex-col mt-7 gap-2">
          <div className="flex gap-2 justify-between items-center">
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

            <Button size="icon" variant="outline">
              <FunnelIcon className="size-6" />
            </Button>
          </div>

          <Select
            items={genres}
            multiple
            onValueChange={(selectedGenres) => updateGenreQuery(selectedGenres)}
            value={filters.genres}
          >
            <SelectTrigger>
              <SelectValue placeholder="All Genres" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Genres</SelectLabel>
                {genres.map((genre) => (
                  <SelectItem key={genre.value} value={genre.value}>
                    {genre.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select
            onValueChange={(value) => {
              if (!value) return;

              updateLanguageQuery(value);
            }}
            value={filters.language}
            items={languages}
          >
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="All Languages" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Languages</SelectLabel>

                {languages.map((lang) => (
                  <SelectItem key={lang.value} value={lang.value}>
                    {lang.label}
                  </SelectItem>
                ))}
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

function FilterDrawer() {
  // https://dribbble.com/shots/25746589-E-Commerce-Search-Filter-Mobile-Screen
  return (
    <Drawer
      trigger={
        <Button size="icon" variant="outline">
          <FunnelIcon className="size-6" />
        </Button>
      }
    >
      <div className="flex flex-col gap-4">
        <Field>
          <FieldLabel className="font-medium">Sort By</FieldLabel>
          <ToggleGroup variant="outline" spacing={2}>
            <ToggleGroupItem value="most-reserved" className="text-sm">
              Most Reserved
            </ToggleGroupItem>
            <ToggleGroupItem value="recent-added" className="text-sm">
              Recent Added
            </ToggleGroupItem>
          </ToggleGroup>
        </Field>

        {/** todo: integrate this to the filters, refactor the drawer to use the shadcn one */}
        <Field>
          <FieldLabel className="font-medium">Genres</FieldLabel>
          <ToggleGroup variant="outline" spacing={2} multiple>
            <ToggleGroupItem value="most-reserved" className="text-sm">
              Most Reserved
            </ToggleGroupItem>
            <ToggleGroupItem value="recent-added" className="text-sm">
              Recent Added
            </ToggleGroupItem>
          </ToggleGroup>{" "}
          q
        </Field>
      </div>
    </Drawer>
  );
}
