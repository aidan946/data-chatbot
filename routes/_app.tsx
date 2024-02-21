import Header from "@/components/Header.tsx";
import type { State } from "@/plugins/session.ts";
import { defineApp } from "$fresh/server.ts";

export default defineApp<State>((_, ctx) => {
  return (
    <html data-theme="retro" lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <div>
          <div class="flex flex-col min-h-screen mx-auto max-w-7xl w-full">
            <Header
              url={ctx.url}
              sessionUser={ctx.state?.sessionUser}
            />
            <ctx.Component />
          </div>
        </div>
      </body>
    </html>
  );
});
