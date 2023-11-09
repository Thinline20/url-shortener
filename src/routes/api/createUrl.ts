import { nanoid } from "../utils/nanoid";
import { type APIEvent } from "solid-start";

export async function POST({ request }: APIEvent) {
  const url = request.headers.get("url") ?? "";

  if (url === "") {
    return new Response("Missing url", { status: 400 });
  }

  const host = `${location.protocol}//${location.host}}`;

  const searchUrl = await fetch(`${host}/api/search/url/${url}`);

  if (searchUrl.status === 200) {
    
  }

  let id;

  while (true) {
    id = nanoid();

    const res = await fetch(`${host}/api/search/slug/${id}`);

    if (res.status === 404) {
      break;
    }
  }
}
