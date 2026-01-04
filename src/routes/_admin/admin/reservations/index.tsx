import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_admin/admin/reservations/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main>
      <h2>Reservations & Borrowing</h2>
    </main>
  );
}
