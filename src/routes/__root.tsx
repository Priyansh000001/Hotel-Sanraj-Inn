import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useLocation,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/luxury/Navbar";
import { LuxuryFooter } from "@/components/luxury/LuxuryFooter";
import { ScrollProgress } from "@/components/luxury/ScrollProgress";
import { FloatingCTA } from "@/components/luxury/FloatingCTA";
import { MouseGlow } from "@/components/luxury/MouseGlow";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-9xl text-gradient-gold">404</h1>
        <h2 className="mt-4 text-xl font-display text-foreground">Beyond our pavilions</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you sought has slipped into the night. Allow us to guide you back.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex px-6 py-3 gradient-gold text-primary-foreground rounded-full text-xs tracking-luxe uppercase"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl">Something interrupted us</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="mt-6 px-6 py-3 gradient-gold text-primary-foreground rounded-full text-xs tracking-luxe uppercase"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Hotel Sanraj Inn — Hôtels & Résidences | Luxury Beyond Measure" },
      {
        name: "description",
        content:
          "Hotel Sanraj Inn is a collection of timeless luxury properties devoted to stillness, craft and quiet excellence. Reserve your suite.",
      },
      { name: "author", content: "Hotel Sanraj Inn Hôtels" },
      { property: "og:title", content: "Hotel Sanraj Inn — Hôtels & Résidences" },
      {
        property: "og:description",
        content:
          "Cinematic luxury hospitality. Curated suites, private villas, world-class dining.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <ScrollProgress />
      <MouseGlow />
      <Navbar />
      <main className="relative z-10">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <FloatingCTA />
      <LuxuryFooter />
    </QueryClientProvider>
  );
}
