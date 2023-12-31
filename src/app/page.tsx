import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col space-y-8">
      <header className="flex flex-col text-center">
        <h1 className="text-4xl mb-4">Rachel &amp; Keith&apos;s Party</h1>
        <h2 className="text-2xl mb-4">
          Subtitle
        </h2>
        <div className="text-2xl mb-2">Date</div>
        <div className="text-xl mb-2">
          Address
          <br />
          Town, Postcode
        </div>
        <Link className="link" href="/form">
          Reply Form
        </Link>
      </header>
      <section className="flex flex-col space-y-3">
        <p>
          Come along and have fun
        </p>

        <p>
          This is the plan
        </p>

        <p>
          More plan
        </p>
      </section>
      <section className="flex flex-col space-y-3">
        <h3 className="text-xl font-bold">Another section</h3>
        <p>
          Info in the section
        </p>
      </section>
      <section className="flex flex-col space-y-3">
        <h3 className="text-xl font-bold">Another section</h3>
        <p>
          More info
        </p>
      </section>
      <section className="flex flex-col space-y-3">
        <h3 className="text-xl font-bold">Section with a list</h3>
        <ul className="list-disc flex flex-col space-y-2 pl-6">
          <li>Thing 1</li>
          <li>Thing 2</li>
          <li>Oh and another thing</li>
        </ul>
      </section>
      <section className="flex flex-col space-y-3">
        <h3 className="text-xl font-bold">Lastly...</h3>
        <p>
          Please let us know if you&apos;re planning on joining us via{" "}
          <a className="link" href="/form">
            this form
          </a>
          .
        </p>
      </section>
    </main>
  );
}
