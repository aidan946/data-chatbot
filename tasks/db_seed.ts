import { createUser } from "@/utils/db.ts";
import { ulid } from "std/ulid/mod.ts";

const userPromises = [];
for (const login of users) {
  userPromises.push(
    createUser({
      login,
      sessionId: crypto.randomUUID(),
    }),
  );
}
await Promise.all(userPromises);
