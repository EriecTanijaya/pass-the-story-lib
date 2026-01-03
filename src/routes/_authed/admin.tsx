import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authed/admin")({
  component: RouteComponent,
});

function RouteComponent() {
  const { user } = Route.useRouteContext();

  return <div>Hello {user?.name}, welcome to "/_authed/admin"!</div>;
}
