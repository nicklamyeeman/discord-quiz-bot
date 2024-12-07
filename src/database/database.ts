import { AceBase } from "acebase";

export const database = new AceBase("quizbot", {
  logLevel: "error",
  storage: { path: "./src/database" },
});

database.ready(async () => {
  const lastUpdate = await database.ref("activity/lastUpdate").get();
  if (!lastUpdate.exists()) {
    await database.ref("activity").set({ lastUpdate: Date.now() });
  }
});
