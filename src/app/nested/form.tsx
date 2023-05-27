"use client";

import { useState } from "react";
import { save } from "./actions";
import { schema } from "./schema";

export default function Form({ complete }: { complete: boolean }) {
  const [pending, setPending] = useState(false);
  console.log("render", pending);

  async function action(data: any) {
    const result = schema.safeParse(data);
    console.log("action");

    if (result.success) {
      console.log("setting");
      setPending(true);

      await save(result.data);

      setPending(false);
    } else {
      console.log(result.error);
    }
  }

  return (
    <form action={action}>
      {complete && <p>Thanks for filling in this form!</p>}
      <label>
        Your email address
        <input type="text" name="email" />
      </label>
      <button type="submit">{pending ? "Saving..." : "Save"}</button>
    </form>
  );
}
