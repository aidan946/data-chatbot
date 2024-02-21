// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_500 from "./routes/_500.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $account_index from "./routes/account/index.tsx";
import * as $api_users_login_index from "./routes/api/users/[login]/index.ts";
import * as $api_users_index from "./routes/api/users/index.ts";
import * as $dashboard_index from "./routes/dashboard/index.tsx";
import * as $dashboard_stats from "./routes/dashboard/stats.tsx";
import * as $dashboard_users from "./routes/dashboard/users.tsx";
import * as $index from "./routes/index.tsx";
import * as $users_login_ from "./routes/users/[login].tsx";
import * as $welcome from "./routes/welcome.tsx";
import * as $Chart from "./islands/Chart.tsx";
import * as $UsersTable from "./islands/UsersTable.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_500.tsx": $_500,
    "./routes/_app.tsx": $_app,
    "./routes/account/index.tsx": $account_index,
    "./routes/api/users/[login]/index.ts": $api_users_login_index,
    "./routes/api/users/index.ts": $api_users_index,
    "./routes/dashboard/index.tsx": $dashboard_index,
    "./routes/dashboard/stats.tsx": $dashboard_stats,
    "./routes/dashboard/users.tsx": $dashboard_users,
    "./routes/index.tsx": $index,
    "./routes/users/[login].tsx": $users_login_,
    "./routes/welcome.tsx": $welcome,
  },
  islands: {
    "./islands/Chart.tsx": $Chart,
    "./islands/UsersTable.tsx": $UsersTable,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
