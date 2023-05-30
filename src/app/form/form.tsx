"use client";

import { FormEvent, useState } from "react";
import { schema } from "./schema";

export default function Form({ complete }: { complete: boolean }) {
  const [pending, setPending] = useState(false);
  const [groupSize, setGroupSize] = useState(1);
  const [validationErrors, setValidationErrors] = useState<any>();
  const [serverError, setServerError] = useState<string | undefined>();

  async function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const result = schema.safeParse(formData);

    if (result.success) {
      setValidationErrors(undefined);
      setPending(true);

      const response = await fetch("/form/handler", {
        method: "POST",
        headers: {
          // "Content-Type": "application/json",
          // "Content-Type": "application/x-www-form-urlencoded",
          // "Content-Type": "multipart/form-data",
        },
        // body: JSON.stringify(result.data),
        body: formData,
      });

      setPending(false);

      if (!response.ok) {
        if (response.status === 400) {
          let { error } = await response.json();
          setServerError(error);
        } else {
          setServerError("An unexpected error occurred");
          console.log(response);
        }
      }
    } else {
      setValidationErrors(result.error.format());
      console.log(result.error.format());
    }
  }

  return (
    <form className="flex flex-col space-y-8" onSubmit={submitHandler}>
      <h1 className="text-4xl text-center">Party Admin</h1>
      {complete && <p>Thanks for filling in this form!</p>}
      <section className="flex flex-col space-y-2">
        <h3 className="text-xl">Your Posse</h3>
        {new Array(groupSize).fill(null).map((_, index) => (
          <div key={index}>
            <input
              className="input"
              type="text"
              name="names"
              placeholder="Adult human name"
            />
            {validationErrors?.names?.[index] && (
              <div className="error-text">Please enter a name</div>
            )}
          </div>
        ))}
        {
          <div>
            <button
              className="link"
              type="button"
              onClick={() => setGroupSize(groupSize + 1)}
            >
              Add
            </button>
            {" - "}
            <button
              className="link"
              type="button"
              onClick={() => setGroupSize(Math.max(1, groupSize - 1))}
            >
              Remove
            </button>
          </div>
        }
        <label className="label-text">
          Number of sproglets
          <div className="w-1/2">
            <input
              className="input"
              type="number"
              name="childCount"
              defaultValue="0"
            />
          </div>
        </label>
      </section>
      <section className="flex flex-col space-y-2">
        <h3 className="text-xl">Food & Drink</h3>
        <label className="label-text">
          Estimated ale consumption
          <select className="input" name="aleConsumption">
            <option value="0">Negligable</option>
            <option value="1">Minimal</option>
            <option value="2">Moderate</option>
            <option value="3">High</option>
            <option value="4">Obscene</option>
          </select>
        </label>
        <label className="label-text">
          Cocktail contribution
          <select className="input" name="cocktailContribution">
            <option value="none">Not my bag, ta</option>
            <option value="rum">White Rum, I will bring</option>
            <option value="gin">Gin, I will bring</option>
            <option value="vodka">Vodka, I will bring</option>
            <option value="kahlua">Kahlúa, I will bring</option>
          </select>
        </label>
      </section>
      <section className="flex flex-col space-y-2">
        <h3 className="text-xl">Any other business</h3>
        <label className="label-text">
          Is there anything else you&apos;d like to request, suggest, contribute
          or comment upon?
          <textarea className="input" name="comments" rows={4} />
        </label>
      </section>
      <section>
        <label className="label-text">
          Your email address
          <input className="input" type="text" name="email" />
          {validationErrors?.email && (
            <div className="error-text">
              This doesn&apos;t look like an email
            </div>
          )}
        </label>
      </section>
      <button className="btn-primary" type="submit">
        {pending ? "Saving..." : "Save"}
      </button>
    </form>
  );
}
