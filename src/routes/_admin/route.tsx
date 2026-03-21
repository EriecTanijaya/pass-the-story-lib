import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_admin")({
  beforeLoad: ({ context }) => {
    if (!context.user || context.user.role === "member") {
      throw redirect({ to: "/" });
    }
  },
});
