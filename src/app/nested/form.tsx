"use client";

import { FormEvent, useState } from "react";
import { schema } from "./schema";

export default function Form({ complete }: { complete: boolean }) {
  const [pending, setPending] = useState(false);

  async function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const result = schema.safeParse(formData);
    console.log("hey");

    if (result.success) {
      setPending(true);

      const response = await fetch("/nested/handler", {
        method: "POST",
        headers: {
          // "Content-Type": "application/json",
          // "Content-Type": "application/x-www-form-urlencoded",
          // "Content-Type": "multipart/form-data",
        },
        // body: JSON.stringify(result.data),
        body: formData,
      });

      console.log(response);

      if (response.ok) {
        console.log("Yes boi");
      }

      setPending(false);
    } else {
      console.log(result.error);
    }
  }

  return (
    <form className="flex flex-col max-w-lg space-y-4" onSubmit={submitHandler}>
      {complete && <p>Thanks for filling in this form!</p>}
      <label className="label-text">
        Your email address
        <input className="input" type="text" name="email" />
      </label>
      <label className="label-text">
        Your age
        <input className="input" type="text" name="age" />
      </label>
      <button className="btn-primary" type="submit">
        {pending ? "Saving..." : "Save"}
      </button>
    </form>
  );
}
