"use client";

import { FormEvent, useState } from "react";
import { schema } from "./schema";

interface Props {
  initialComplete: boolean;
}

export default function Form({ initialComplete }: Props) {
  const [complete, setComplete] = useState(initialComplete);
  const [pending, setPending] = useState(false);
  const [groupSize, setGroupSize] = useState(1);
  const [validationErrors, setValidationErrors] = useState<any>();
  const [serverError, setServerError] = useState<string | undefined>();

  async function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const result = schema.safeParse(formData);

    if (result.success) {
      setPending(true);
      setValidationErrors(undefined);
      setServerError(undefined);

      const response = await fetch("/form/handler", {
        method: "POST",
        body: formData,
      });

      setPending(false);

      if (response.ok) {
        setComplete(true);
      } else {
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
    }
  }

  return (
    <div className="flex flex-col space-y-8">
      <h1 className="text-4xl text-center">Party Admin</h1>
      {complete ? (
        <div className="flex flex-col space-y-2">
          <p>Thanks for your adminsitrative efforts!</p>
          <p>
            If you&apos;d like to make a cash contribution, you can transfer to:
          </p>
          <p>
            Sam Barnes
            <br />
            04-00-04
            <br />
            18309183
          </p>
          <p>
            <button className="link" onClick={() => setComplete(false)}>
              Show me the form again
            </button>
            .
          </p>
        </div>
      ) : (
        <form className="flex flex-col space-y-8" onSubmit={submitHandler}>
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
            <label className="label-text">
              When are you likely to arrive
              <div className="w-1/2">
                <select className="input" name="arrivalDay">
                  <option>Friday</option>
                  <option>Saturday</option>
                </select>
              </div>
            </label>
          </section>
          <section className="flex flex-col space-y-2">
            <h3 className="text-xl">Food & Drink</h3>
            <label className="label-text">
              Estimated ale consumption
              <div className="w-1/2">
                <select className="input" name="aleConsumption">
                  <option value="0">Negligable</option>
                  <option value="1">Minimal</option>
                  <option value="2">Moderate</option>
                  <option value="3">High</option>
                  <option value="4">Obscene</option>
                </select>
              </div>
            </label>
            <label className="label-text">
              Cocktail contribution
              <div className="w-1/2">
                <select className="input" name="cocktailContribution">
                  <option value="none">Not our bag, ta</option>
                  <option value="rum">White Rum, We will bring</option>
                  <option value="gin">Gin, We will bring</option>
                  <option value="vodka">Vodka, We will bring</option>
                  <option value="kahlua">Kahlúa, We will bring</option>
                </select>
              </div>
            </label>
            <label className="label-text">
              Rough indication of dietary preference
              <div className="w-1/2">
                <select className="input" name="diet">
                  <option value="0">Strictly vegan</option>
                  <option value="1">Aspirationally vegan</option>
                  <option value="2">Vegetarian</option>
                  <option value="3">Show us the meat</option>
                </select>
              </div>
            </label>
          </section>
          <section className="flex flex-col space-y-2">
            <h3 className="text-xl">Any other business</h3>
            <label className="label-text">
              Is there anything else you&apos;d like to request, suggest,
              contribute or comment upon?
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
          {serverError && <p className="error-text">{serverError}</p>}
          <button className="btn-primary" type="submit">
            {pending ? "Saving..." : "Save"}
          </button>
        </form>
      )}
    </div>
  );
}
