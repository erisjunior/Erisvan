"use server";

import { kv } from "@vercel/kv";

export const incrementStar = async () => {
  await kv.incr("stars");
};
