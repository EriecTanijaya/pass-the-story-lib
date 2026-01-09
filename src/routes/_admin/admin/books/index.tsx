import { EyeIcon, MagnifyingGlassIcon } from "@phosphor-icons/react";
import { createFileRoute } from "@tanstack/react-router";
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
import { Drawer } from "vaul";

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
};

function BookCard({
  id,
  condition,
  genre,
  name,
  status,
  donor,
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

        <Drawer.Content className="h-fit fixed bottom-0 left-0 right-0 bg-white p-4">
          <Drawer.Handle className="mb-8" />

          <Drawer.Title>this is title</Drawer.Title>

          <Drawer.Description>this is desc</Drawer.Description>

          {/*<Drawer.Close />*/}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
