import { FunnelIcon, MagnifyingGlassIcon } from "@phosphor-icons/react";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BookCard } from "@/shared/components/bookCard";
import { Button } from "@/shared/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/shared/components/ui/drawer";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/shared/components/ui/input-group";
import { ToggleGroup, ToggleGroupItem } from "@/shared/components/ui/toggle-group";

export const Route = createFileRoute("/_member/books/")({
  component: RouteComponent,
});

type Option = {
  label: string;
  value: string;
};

const genres: Option[] = [
  { label: "Mystery", value: "mystery" },
  { label: "Crime", value: "crime" },
];

const languages: Option[] = [
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

  const hasFilter = filters.search !== "" || filters.genres.length !== 0 || filters.language !== "";

  return (
    <main className="flex flex-col pt-7 xl:px-24 bg-white">
      <div className="px-7 xl:px-0">
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

          <FilterDrawer
            genreOptions={genres}
            langOptions={languages}
            genres={filters.genres}
            lang={filters.language}
            onGenreChange={updateGenreQuery}
            onLangChange={updateLanguageQuery}
            onResetFilter={deleteFilters}
          />
        </div>

        <pre>{hasFilter && JSON.stringify(filters, null, 2)}</pre>
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

type FilterDrawerProps = {
  genreOptions: Option[];
  langOptions: Option[];
  genres: string[];
  lang: string;
  onGenreChange: (genres: string[]) => void;
  onLangChange: (lang: string) => void;
  onResetFilter: () => void;
};

function FilterDrawer({
  genreOptions,
  langOptions,
  onGenreChange,
  onLangChange,
  genres,
  lang,
  onResetFilter,
}: FilterDrawerProps) {
  return (
    <Drawer>
      <DrawerTrigger>
        <Button size="icon" variant="outline">
          <FunnelIcon className="size-6" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Filters</DrawerTitle>
        </DrawerHeader>

        <div className="p-4 flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <h3>Genres</h3>
            <ToggleGroup
              variant="outline"
              multiple
              spacing={2}
              onValueChange={(selectedGenres) => onGenreChange(selectedGenres)}
              value={genres}
            >
              {genreOptions.map((option) => (
                <ToggleGroupItem key={option.value} value={option.value}>
                  {option.label}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>

          <div className="flex flex-col gap-2">
            <h3>Languages</h3>
            <ToggleGroup
              variant="outline"
              spacing={2}
              onValueChange={(selectedLangs) => onLangChange(selectedLangs[0])}
              value={[lang]}
            >
              {langOptions.map((option) => (
                <ToggleGroupItem key={option.value} value={option.value}>
                  {option.label}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>
        </div>

        <DrawerFooter>
          <Button variant="outline" onClick={onResetFilter}>
            Reset Filters
          </Button>
          <Button>Apply Filters</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
