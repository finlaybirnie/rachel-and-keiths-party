import { NextRequest, NextResponse } from "next/server";
import { schema } from "../schema";
import { db } from "../../../db";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const result = schema.safeParse(formData);

  if (result.success) {
    console.log("Success", result.data);

    await db.insertInto("rsvp").values(result.data).executeTakeFirstOrThrow();

    const response = NextResponse.json({});

    response.cookies.set("complete", "yes");

    return response;
  } else {
    console.log("Error", result.error);

    return NextResponse.json(
      { error: result.error.toString() },
      { status: 400 }
    );
  }
}
