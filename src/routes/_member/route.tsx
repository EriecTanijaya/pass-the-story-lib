import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_member")({
  beforeLoad: ({ context }) => {
    const { user } = context;

    if (user && user.role === "admin") {
      throw redirect({ to: "/admin" });
    }
  },
});
