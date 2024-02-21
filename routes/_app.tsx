import type { State } from "@/plugins/session.ts";
import { defineApp } from "$fresh/server.ts";
import SideMenu from "@/components/SideMenu.tsx";

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
          <div class="flex min-h-screen mx-auto w-full">
            <SideMenu />
            <ctx.Component />
          </div>
        </div>
      </body>
    </html>
  );
});
