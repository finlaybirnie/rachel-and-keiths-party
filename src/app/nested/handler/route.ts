import { NextRequest, NextResponse } from "next/server";
import { schema } from "../schema";
// import { redirect } from 'next/navigation';

const wait = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  console.log(formData);

  const result = schema.safeParse(formData);

  if (result.success) {
    console.log(result.data);
    request.cookies.set("complete", "yes");
  } else {
    console.log(result.error);
    request.cookies.set("error", result.error.toString());
  }

  await wait(2500);

  // return redirect("/nested");
  return NextResponse.json({});
}
