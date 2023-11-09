import { eq } from "drizzle-orm";
import { type APIEvent } from "solid-start";
import { db } from "~/server/db";
import { shortUrl, type ShortUrl } from "~/server/db/schema";

export async function GET({ params }: APIEvent) {
  const result = await db
    .select({
      id: shortUrl.id,
    })
    .from(shortUrl)
    .where(eq(shortUrl.slug, params.slug))
    .limit(1);

  if (result.length === 0) {
    return new Response("Not found", { status: 404 });
  }

  return new Response("Found", { status: 200 });
}
