import { TanStackDevtools } from "@tanstack/react-devtools";
import type { QueryClient } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  HeadContent,
  Scripts,
  useMatchRoute,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { createServerFn } from "@tanstack/react-start";
import { getRequestHeaders } from "@tanstack/react-start/server";
import { APIError } from "better-auth";
import { auth } from "@/app/auth/lib/betterAuth/authServer";
import type { Role, User } from "@/app/auth/model/user";
import { Footer } from "@/shared/components/footer";
import { NavigationBar } from "@/shared/components/navigationBar";
import appCss from "../styles.css?url";

const getCurrentUserApi = createServerFn({ method: "GET" }).handler(
  async () => {
    const headers = getRequestHeaders();

    try {
      const session = await auth.api.getSession({ headers });

      if (!session) {
        return {
          success: false,
          error: `Session not found`,
        };
      }

      const user: User | null = {
        id: session.user.id,
        name: session.user.name,
        role: session.user.role as Role,
        profileImageUrl: session.user.image as string,
      };

      return {
        success: true,
        user,
      };
    } catch (err) {
      if (err instanceof APIError) {
        return {
          success: false,
          error: err.message,
        };
      }

      return {
        success: false,
        error: `There's Error`,
      };
    }
  },
);

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        {
          charSet: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          title: "Pass The Story Library",
        },
      ],
      links: [
        { rel: "stylesheet", href: appCss },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        { rel: "manifest", href: "/site.webmanifest", color: "#fffff" },
        { rel: "icon", href: "/favicon.ico" },
      ],
    }),

    shellComponent: RootDocument,

    beforeLoad: async () => {
      const res = await getCurrentUserApi();

      if (!res.success) {
        return {
          user: null,
        };
      }

      const { user } = res;

      return {
        user,
      };
    },
  },
);

function RootDocument({ children }: { children: React.ReactNode }) {
  const { user } = Route.useRouteContext();

  const matchRoute = useMatchRoute();

  const matchedAuthRoute = matchRoute({ to: "/auth", fuzzy: true });
  const matchedAdminRoute = matchRoute({ to: "/admin", fuzzy: true });

  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {!matchedAuthRoute && <NavigationBar user={user} />}
        {children}
        {(() => {
          if (matchedAuthRoute) {
            return;
          }

          if (matchedAdminRoute) {
            return;
          }

          return <Footer />;
        })()}
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
