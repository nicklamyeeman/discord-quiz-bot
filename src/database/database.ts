import { AceBase } from "acebase";
import { DATABASE_PATH } from "./utils";

export const database = new AceBase("quizbot", {
  logLevel: "error",
  storage: { path: DATABASE_PATH },
});

database.ready(async () => {
  const lastUpdate = await database.ref("activity/lastUpdate").get();
  if (!lastUpdate.exists()) {
    await database.ref("activity").set({ lastUpdate: Date.now() });
  }
});
