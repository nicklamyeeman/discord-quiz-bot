import { database } from "./database";

export async function getDatabaseValue<T>(ref: string) {
  return database
    .ref<T>(ref)
    .get()
    .then((snapshot) => snapshot?.val() ?? null);
}

export async function setDatabaseValue<T>(ref: string, value: T) {
  await database.ref<T>(ref).set(value);
}

export async function getSortedDatabaseValue<T>(
  ref: string,
  options: {
    sortBy: string;
    asc?: boolean;
    limitTo?: number;
  }
) {
  return database
    .query(ref)
    .take(options?.limitTo ?? 50)
    .sort(options.sortBy, options.asc ?? true)
    .get<T>()
    .then((snapshot) => snapshot.getValues());
}
