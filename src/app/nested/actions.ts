"use server";

import { cookies } from "next/headers";

const wait = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

export async function save(data: any) {
  console.log(data);

  cookies().set("complete", "yes");

  await wait(2500);
}
