import {
  mysqlTable,
  bigint,
  uniqueIndex,
  varchar,
  text,
} from "drizzle-orm/mysql-core";

export const shortUrl = mysqlTable(
  "short-url",
  {
    id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
    slug: varchar("slug", { length: 16 }).unique().notNull(),
    url: text("url").notNull(),
  },
  (shortUrl) => ({
    urlIndex: uniqueIndex("url_index").on(shortUrl.url),
    slugIndex: uniqueIndex("slug_index").on(shortUrl.slug),
  }),
);

export type ShortUrl = typeof shortUrl.$inferSelect;
export type NewShortUrl = typeof shortUrl.$inferInsert;