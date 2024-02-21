import type { State } from "@/plugins/session.ts";
import Head from "@/components/Head.tsx";
import { defineRoute } from "$fresh/server.ts";

export default defineRoute<State>((_req, ctx) => {
  const isSignedIn = ctx.state.sessionUser !== undefined;

  return (
    <>
      <Head title="Home" href={ctx.url.href} />
      <main class="p-4">
        <div>Test</div>
        {isSignedIn
          ? (
            <a
              href="/account"
              class="link-styles nav-item"
            >
              Account
            </a>
          )
          : (
            <a href="/signin" class="link-styles nav-item">
              Sign in
            </a>
          )}
      </main>
    </>
  );
});
