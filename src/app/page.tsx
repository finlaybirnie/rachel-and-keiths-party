import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col space-y-8">
      <header className="flex flex-col text-center">
        <h1 className="text-4xl mb-4">Lizi &amp; Sam&apos;s 40 - 40 Party</h1>
        <h2 className="text-2xl mb-4">
          A weekend of music and silliness in a field in Devon
        </h2>
        <div className="text-2xl mb-2">7-9 July</div>
        <div className="text-xl mb-2">
          Higher Moorlands Farm
          <br />
          Honiton, EX14 4SY
        </div>
        <Link className="link" href="/form">
          Reply Form
        </Link>
      </header>
      <section className="flex flex-col space-y-3">
        <p>
          Come and join us for some or all of the weekend. Bimble your way over
          on Friday evening for some easy vibes where we can share some curry,
          drink some ale and entertain each other with instruments and voices.
        </p>

        <p>
          The sun will be shining on Saturday and we’ll try and tire the kids
          out with games and a bouncy castle. Sam will probably organise
          something overly competitive and Lizi has invented a new game that may
          or may not work. There will be music.
        </p>

        <p>
          Saturday evening will be devoted to the pursuit that we’ve all spent
          so much time perfecting over the years - getting a bit wobbly and
          doing something that falls in the broad category of movement known as
          dancing.
        </p>
      </section>
      <section className="flex flex-col space-y-3">
        <h3 className="text-xl font-bold">The Site</h3>
        <p>
          Higher Moorlands is a{" "}
          <a className="link" href="https://highermoorlandsfarm.co.uk">
            working farm
          </a>{" "}
          in the beautiful Blackdown Hills, run by Evie and Ollie. In the summer
          it&apos;s also a campsite with showers and compost loos and we&apos;ve
          got it to ourselves for the weekend.
        </p>
      </section>
      <section className="flex flex-col space-y-3">
        <h3 className="text-xl font-bold">Food</h3>
        <p>
          Saturday evening’s grub will be provided but the rest of the time will
          we be sorting ourselves out. We have some suggestions to make things a
          little communal:
        </p>
        <p>
          On <strong>Friday evening</strong> we suggest curry. Bring a dish to
          share and we’ll cook up some rice for us all. 7pm (ish).
        </p>
        <p>
          <strong>Saturday breakfast</strong> - bring your own fruit, cereal or
          apple crumble. We will provide tea and coffee - caffeine in the
          morning is a human right.
        </p>
        <p>
          <strong>Saturday lunch</strong> - let’s BBQ together. Show off your
          favourite vegetable combo or bring some cash and buy some{" "}
          <a className="link" href="https://highermoorlandsfarm.co.uk/#produce">
            meat from the farm
          </a>
          . We&apos;ll bring a big sack of charcoal and an extra BBQ or two in
          case you aren&apos;t able to bring one.
        </p>
        <p>
          <strong>Snacks</strong> - please bring some. Lizi really likes crisps
          and Sam is rather partial to cake.
        </p>
        <p>
          <strong>Saturday dinner</strong> - Evie (of the farm) will be cooking
          up a lovely supper for us all. Probably a tagine, definitely something
          with a vegan option.
        </p>
        <p>
          <strong>Sunday breakfast</strong> - rinse and repeat.
        </p>
        <p>
          Generally don&apos;t panic if you don’t have a full camp kitchen you
          can bring. We will bring an extra stove and some trestle tables where
          we can prep things together.
        </p>
      </section>
      <section className="flex flex-col space-y-3">
        <h3 className="text-xl font-bold">Drinks</h3>
        <p>
          Otter Brewery is just around the corner from the farm, so it’d be rude
          not get a few barrels in. If you’re an <strong>ale</strong> drinker
          we’d appreciate a contribution towards this cost.
        </p>
        <p>
          Let’s collaborate on <strong>cocktails</strong>. We’ve chosen a menu
          of three - the mojito, espresso martini and the good ol G&T. If you’re
          up for contributing a bottle to the shared bar, let us know in the
          reply form. We’ll sort out the ice, fruit, etc…
        </p>
      </section>
      <section className="flex flex-col space-y-3">
        <h3 className="text-xl font-bold">Kids</h3>
        <p>
          We like kids and we like you. We want you all to come. As well as the
          aforementioned bouncy castle there will be silly games and crisps (if
          you bring them). The only caveat is there will be music till 2am on
          Saturday night. We’ll reserve the farthest end of the field for
          families but ultimately it is just one field. Do let us know if
          there’s anything in particular that would make things easier for you
          as parents.
        </p>
      </section>
      <section className="flex flex-col space-y-3">
        <h3 className="text-xl font-bold">Dogs</h3>
        <p>
          Must be kept on leads - it’s a working farm with animals in adjacent
          fields. Being on a lead isn’t much fun for a dog, so it may be better
          to find alternative humans to take care of your hound for the weekend.
        </p>
      </section>
      <section className="flex flex-col space-y-3">
        <h3 className="text-xl font-bold">Cash Contributions</h3>
        <p>
          Some of you have mentioned that you are happy to chip in to help cover
          costs. That is really helpful, thank you. If money is too tight to
          mention for you at the moment, then don’t mention it. Your company is
          the most important thing.
        </p>
        <ul className="list-disc flex flex-col space-y-2 pl-6">
          <li>£10 will cover your Saturday evening meal and tea and coffee</li>
          <li>Maybe add £15 to £30 for ale if that’s your bag</li>
          <li>Another £10 or £20 would help cover some site and tent costs.</li>
        </ul>
        <p>It really is up to you.</p>
        <p>
          <a
            className="link"
            href="https://monzo.me/samuelgallinjamiesonbarnes"
          >
            Here&apos;s the payment link.
          </a>
        </p>
      </section>
      <section className="flex flex-col space-y-3">
        <h3 className="text-xl font-bold">Other Contributions</h3>
        <p>
          Please do get involved. Musical contributions welcome (particularly on
          Friday night) or perhaps you can organise a kids game. Do you have a
          large BBQ you can bring or have you thought of something we
          haven&apos;t mentioned at all?
        </p>
      </section>
      <section className="flex flex-col space-y-3">
        <h3 className="text-xl font-bold">Things to Bring</h3>
        <ul className="list-disc flex flex-col space-y-2 pl-6">
          <li>A tent and related camping paraphernalia</li>
          <li>A chair for the sitting</li>
          <li>
            Cutlery and crockery (it’ll be needed on Saturday evening as well as
            other times)
          </li>
          <li>A reusable cup</li>
          <li>Something you can balance on your head. This is important.</li>
          <li>Musical instruments and voices</li>
          <li>Cash for sausages</li>
        </ul>
      </section>
      <section className="flex flex-col space-y-3">
        <h3 className="text-xl font-bold">Lastly...</h3>
        <p>
          Please let us know if you&apos;re planning on joining us via{" "}
          <a className="link" href="/form">
            this form
          </a>
          . Splendid!
        </p>
      </section>
    </main>
  );
}
