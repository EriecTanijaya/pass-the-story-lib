import {
  BarcodeIcon,
  BookOpenIcon,
  CalendarBlankIcon,
  ClockIcon,
  MapPinIcon,
  TagIcon,
  TranslateIcon,
  UserIcon,
} from "@phosphor-icons/react";
import { createFileRoute } from "@tanstack/react-router";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Separator } from "@/shared/components/ui/separator";

export const Route = createFileRoute("/books/$bookId")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex flex-col max-w-7xl pt-7 px-7 pb-12 gap-5 mx-auto xl:px-0 xl:flex-row">
      <div className="relative basis-1/2">
        {/*<img src="/landscape.jpg" alt="book" className="h-96 object-cover" />*/}
        <div className="h-96 bg-book-card-thumbnail rounded-xl flex justify-center items-center xl:h-full">
          <BookOpenIcon className="size-24 fill-primary" />
        </div>
        <Badge
          variant="secondary"
          className="absolute top-4 right-4 w-20 h-7 bg-white/80"
        >
          Available
        </Badge>
      </div>

      <section className="flex gap-5 flex-col basis-1/2">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-2xl">Dark Island</h2>
          <div className="flex gap-1 items-center text-xl text-muted-foreground">
            <UserIcon className="size-6" />
            Roxi
          </div>
        </div>

        <Separator />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3 bg-card rounded-lg p-4 border shadow-sm">
            <TagIcon weight="bold" className="fill-primary size-6" />
            <div className="flex flex-col">
              <h3 className="text-muted-foreground">Genre</h3>
              <p className="font-semibold">Mystery</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-card rounded-lg p-4 border shadow-sm">
            <TranslateIcon weight="bold" className="fill-primary size-6" />
            <div className="flex flex-col">
              <h3 className="text-muted-foreground">Language</h3>
              <p className="font-semibold">English</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-card rounded-lg p-4 border shadow-sm">
            <MapPinIcon weight="bold" className="fill-primary size-6" />
            <div className="flex flex-col">
              <h3 className="text-muted-foreground">Location</h3>
              <p className="font-semibold">Singapore</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-card rounded-lg p-4 border shadow-sm">
            <BarcodeIcon weight="bold" className="fill-primary size-6" />
            <div className="flex flex-col">
              <h3 className="text-muted-foreground">ISBN</h3>
              <p className="font-mono">123123123123</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-muted-foreground">Tags</h3>
          <div className="flex gap-1">
            <Badge variant="secondary">Adventure</Badge>
            <Badge variant="secondary">Mystery</Badge>
          </div>
        </div>

        <Separator />

        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="font-bold">Next Meetup</CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col gap-3">
            <div className="flex gap-2 items-center">
              <CalendarBlankIcon
                className="fill-primary size-5"
                weight="bold"
              />
              <p className="text-sm">Thursday, 25 December 2025</p>
            </div>
            <div className="flex gap-2 items-center">
              <ClockIcon className="fill-primary size-5" weight="bold" />
              <p className="text-sm">16:00</p>
            </div>
            <div className="flex gap-2 items-center">
              <MapPinIcon className="fill-primary size-5" weight="bold" />
              <p className="text-sm">Singapore</p>
            </div>
          </CardContent>

          <CardFooter>
            <Button>Reserve</Button>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}
