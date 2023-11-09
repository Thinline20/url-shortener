import { eq } from "drizzle-orm";
import { type APIEvent, json } from "solid-start";
import { db } from "~/server/db";
import { shortUrl, type ShortUrl } from "~/server/db/schema";

export async function GET({ params }: APIEvent) {
  const result = await db
    .select({
      slug: shortUrl.slug,
    })
    .from(shortUrl)
    .where(eq(shortUrl.url, params.url)).limit(1);

  if (result.length === 0) {
    return new Response("Not found", { status: 404 })
  }

  const { slug } = result[0];

  return json({ slug })
}
