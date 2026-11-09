import Icon, { Stars } from "./Icon";
import Reveal from "./Reveal";

const PHONE = "(613) 559-2039";
const TEL = "tel:+16135592039";
const SMS = "sms:+16135592039";
const MAPS = "https://www.google.com/maps/search/?api=1&query=3%20Seasons%20Lawncare&query_place_id=ChIJBY-C6he9iGURde6KVpFhZ5Q";
const FB = "https://www.facebook.com/profile.php?id=61556891924874";
const TT = "https://www.tiktok.com/@3seasonslawncare";

const services = [
  { icon: "mower", name: "Lawn Cutting", text: "Regular mowing for small and large properties, homes and businesses alike. Many of our customers stay on season after season, so your lawn gets looked after by someone who knows it.", tone: "g", tag: "Most popular" },
  { icon: "scissors", name: "Trimming & Edging", text: "The detail work along beds, walkways and fences that makes a lawn look finished. It is what customers mean when they tell us the lawn looks very neat.", tone: "y" },
  { icon: "leaf", name: "Spring Cleanups", text: "Winter leaves a mess. We clear out what the snow left behind and get the yard ready for the season.", tone: "g" },
  { icon: "rake", name: "Yard Waste Removal", text: "Clippings, leaves and debris raked up and taken away after a cleanup, so you are not left with a pile at the end of the driveway.", tone: "y" },
  { icon: "tree", name: "Small Brush Removal", text: "Small brush that has crept in along the edges of the yard, cut back and hauled off.", tone: "g" },
  { icon: "truck", name: "Junk Removal", text: "Small junk removal jobs, on their own or alongside your regular yard work. Tell us what needs to go and we will let you know if we can take it.", tone: "y" },
];

const reviews = [
  { name: "Anil P.", job: "Seasonal lawn care", text: "His second year using Anthony. He does a great job, the lawn always looks very neat, and he is very happy with the service." },
  { name: "David S.", job: "Spring cleanup, Round Lake", text: "Hired Anthony for a spring cleanup at his place on Round Lake. Very professional, and an amazing job." },
  { name: "Remy K.", job: "Lawn care", text: "Anthony took care of the lawn on the property and did a great job. Thorough and professional. She recommends him." },
  { name: "Muhammad C.", job: "Lawn care", text: "Anthony's attention to detail and friendly service exceeded expectations, and he is looking forward to enjoying his outdoor space all season." },
  { name: "Nick F.", job: "Lawn care", text: "Anthony took the time to answer every question before starting, and was fully open about pricing with no hidden costs." },
  { name: "Rashid G.", job: "Lawn service", text: "Nearly two years of service now. On time, honest, dedicated, and goes beyond what he promised." },
];

const faqs = [
  { q: "What areas do you serve?", a: "We work in the Round Lake area of Eastern Ontario. If you are nearby and not sure whether you are in range, call or text and ask." },
  { q: "How much does lawn care cost?", a: `It depends on the size of your property and how often you want it done. Call or text ${PHONE} and Anthony will give you a straight price. There are no hidden fees.` },
  { q: "Do you take on one-time jobs?", a: "Yes. Spring cleanups, brush removal and small junk removal can all be booked as one-time jobs." },
  { q: "Do you cut large properties or commercial lots?", a: "Yes. We look after small and large properties, both residential and commercial." },
  { q: "Who will actually show up?", a: "3 Seasons Lawncare is owner-operated. Anthony is the person customers talk to, and the person they mention by name in their reviews." },
  { q: "Can I ask questions before I commit?", a: "Please do. Anthony will go through your questions and concerns before any work starts, so you know exactly what you are getting." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  additionalType: "https://schema.org/HomeAndConstructionBusiness",
  name: "3 Seasons Lawncare",
  telephone: "+1-613-559-2039",
  areaServed: "Round Lake area, Eastern Ontario",
  founder: { "@type": "Person", name: "Anthony" },
  sameAs: [FB, TT],
  hasMap: MAPS,
  aggregateRating: { "@type": "AggregateRating", ratingValue: 4.9, reviewCount: 15 },
};

function CallBtn({ className = "" }: { className?: string }) {
  return <a href={TEL} className={`btn inline-flex min-h-[54px] items-center justify-center gap-2 rounded-xl bg-cta px-7 text-lg font-extrabold text-on-cta hover:bg-cta-dark ${className}`}><Icon name="phone" className="h-5 w-5" />Call {PHONE}</a>;
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Reveal />
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-card focus:p-3">Skip to main content</a>

      <header className="sticky top-0 z-40 border-b border-line bg-card/95 backdrop-blur">
        <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between gap-4 px-5">
          <a href="#top" className="flex items-center gap-2.5"><span className="grid h-10 w-10 place-items-center rounded-full bg-brand text-cta"><Icon name="mower" className="h-5 w-5" /></span><span className="text-xl font-black tracking-tight text-brand-dark">3 Seasons Lawncare</span></a>
          <nav aria-label="Main" className="hidden items-center gap-6 font-bold lg:flex">
            <a href="#services" className="hover:text-brand">Services</a>
            <a href="#reviews" className="hover:text-brand">Reviews</a>
            <a href="#about" className="hover:text-brand">About Anthony</a>
            <a href="#how" className="hover:text-brand">How It Works</a>
            <a href="#faq" className="hover:text-brand">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={TEL} className="hidden text-lg font-extrabold text-brand-dark xl:block">{PHONE}</a>
            <a href={TEL} className="btn hidden min-h-[48px] items-center rounded-xl bg-cta px-5 font-extrabold text-on-cta hover:bg-cta-dark md:inline-flex">Call Now</a>
            <a href={TEL} aria-label={`Call ${PHONE}`} className="btn grid h-12 w-12 place-items-center rounded-xl bg-cta text-on-cta md:hidden"><Icon name="phone" /></a>
          </div>
        </div>
      </header>

      <main id="main" className="pb-20 md:pb-0">
        <section id="top" className="bg-tint">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-12 md:py-20 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">
            <div>
              <h1>Lawn Care &amp; Spring Cleanups in the Round Lake Area, Ontario</h1>
              <p className="mt-5 max-w-[54ch] text-xl leading-relaxed text-muted">Neat lawns, honest pricing and an owner who shows up. Anthony looks after small and large properties, and plenty of his customers have stayed with him for years.</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <CallBtn />
                <a href={SMS} className="btn inline-flex min-h-[54px] items-center justify-center gap-2 rounded-xl border-2 border-brand bg-card px-7 text-lg font-extrabold text-brand-dark hover:bg-brand-soft"><Icon name="message" className="h-5 w-5" />Text Anthony</a>
              </div>
              <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-bold">
                <Stars /><span>4.9</span><span aria-hidden="true" className="text-brand/40">|</span>
                <a href={MAPS} target="_blank" rel="noopener noreferrer" className="underline decoration-brand/30 underline-offset-4 hover:text-brand">15 Google reviews</a><span aria-hidden="true" className="text-brand/40">|</span><span>Owner-operated</span>
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <figure className="rounded-2xl bg-card p-6">
                <Stars />
                <blockquote className="mt-3 text-xl font-bold leading-snug text-brand-dark">Anthony has been taking care of our lawn for three years, and he always does a lovely job.</blockquote>
                <figcaption className="mt-3 font-semibold">Lyndsay M. <span className="font-normal text-muted">· Google review</span></figcaption>
              </figure>
              <ul className="space-y-2.5 rounded-2xl bg-brand p-6 font-semibold text-white">
                {[["pin", "Round Lake area, Eastern Ontario"], ["home", "Small and large properties"], ["message", "Call or text, either works"]].map(([i, t]) => <li key={t} className="flex items-center gap-3"><span className="text-cta"><Icon name={i} /></span>{t}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section aria-label="Why customers stay with us" className="bg-brand-dark text-white">
          <ul className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4">
            {[["sparkle", "4.9 Google rating", "15 reviews"], ["users", "Owner-operated", "Anthony does the job"], ["shield", "No hidden fees", "clear pricing up front"], ["clock", "Repeat customers", "many going on years"]].map(([i, a, b]) => (
              <li key={a} className="flex items-center gap-3"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cta text-on-cta"><Icon name={i} /></span><span className="leading-tight"><span className="block font-extrabold">{a}</span><span className="text-[1.0625rem] text-white/85">{b}</span></span></li>
            ))}
          </ul>
        </section>

        <section id="services" className="py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5">
            <h2>Lawn &amp; Yard Services</h2>
            <p className="mt-3 max-w-[58ch] text-muted">Regular upkeep or a single cleanup. Whatever you need, you are dealing with the same person from the first text to the last pass of the trimmer.</p>
            <div className="stagger mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <article key={s.name} className={`lift reveal flex flex-col rounded-2xl p-7 ${s.tone === "g" ? "bg-brand-soft" : "bg-gold-soft"}`}>
                  <div className="flex items-start justify-between"><span className="grid h-12 w-12 place-items-center rounded-xl bg-brand text-cta"><Icon name={s.icon} /></span>{s.tag && <span className="rounded-full bg-brand px-3 py-0.5 text-[0.9375rem] font-bold text-white">{s.tag}</span>}</div>
                  <h3 className="mt-4">{s.name}</h3>
                  <p className="mt-2 grow text-[1.0625rem] leading-relaxed text-ink/80">{s.text}</p>
                  <a href={TEL} className="mt-3 inline-flex min-h-[44px] items-center gap-1.5 font-extrabold text-brand-dark">Call about this<Icon name="arrow" className="h-4 w-4" /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="bg-gold-soft py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div><Stars className="h-6 w-6" /><h2 className="mt-2">Rated 4.9 from 15 Google Reviews</h2></div>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center gap-1.5 font-extrabold text-brand-dark underline underline-offset-4">Read all reviews on Google<Icon name="arrow" className="h-4 w-4" /></a>
            </div>
            <div className="stagger mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r) => (
                <figure key={r.name} className="reveal flex flex-col rounded-2xl bg-card p-6">
                  <Stars className="h-4 w-4" />
                  <blockquote className="mt-3 grow leading-relaxed">{r.text}</blockquote>
                  <figcaption className="mt-4 font-extrabold text-brand-dark">{r.name}<span className="block font-normal text-muted">{r.job}</span></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2>Meet Anthony</h2>
              <div className="mt-5 space-y-4 text-muted">
                <p>3 Seasons Lawncare is Anthony&apos;s business. When you call, you get Anthony. When the lawn gets cut, it is Anthony&apos;s name on the work, and customers tend to mention him personally when they talk about it.</p>
                <p>What they say most is that he is thorough and friendly, and that he is straight with them about the price. He takes the time to go through your questions before he starts, and his pricing is clear, with no hidden costs.</p>
                <p>That is why people keep him on. Several customers are on their second or third year with him, and one has had him caring for the lawn for three years running.</p>
              </div>
            </div>
            <ul className="space-y-4">
              {[["shield", "Honest, up-front pricing", "No surprises and no hidden costs."], ["clock", "On time and dependable", "He does what he said he would do."], ["sparkle", "Attention to detail", "Edges, beds and corners get done too."], ["users", "Friendly and easy to reach", "Call or text whenever it suits you."]].map(([i, t, d]) => (
                <li key={t} className="reveal flex items-start gap-4 rounded-2xl bg-tint p-5"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand text-cta"><Icon name={i} /></span><span><h3>{t}</h3><span className="text-[1.0625rem] text-muted">{d}</span></span></li>
              ))}
            </ul>
          </div>
        </section>

        <section id="how" className="bg-brand-soft py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5">
            <h2>How It Works</h2>
            <ol className="stagger mt-10 grid gap-5 md:grid-cols-4">
              {[["Call or text", "Tell Anthony about your property and what you need done."], ["Get a straight price", "Ask whatever you like. You will hear the price before any work starts, with no hidden fees."], ["We get to work", "Anthony shows up as arranged and takes care of the lawn or the cleanup."], ["Enjoy your yard", "Keep it on a regular schedule, or call again when you need the next job done."]].map(([t, d], i) => (
                <li key={t} className="reveal rounded-2xl bg-card p-6"><span className="text-4xl font-black text-brand">{i + 1}</span><h3 className="mt-2">{t}</h3><p className="mt-1.5 text-[1.0625rem] leading-relaxed text-muted">{d}</p></li>
              ))}
            </ol>
          </div>
        </section>

        <section id="area" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 lg:grid-cols-2">
            <div>
              <h2>Where We Work</h2>
              <p className="mt-4 text-muted">We look after properties in the Round Lake area of Eastern Ontario. If you are close by, send a text and find out if we can fit you in.</p>
              <ul className="mt-5 flex flex-wrap gap-2.5 font-bold">{["Round Lake", "Eastern Ontario"].map((c) => <li key={c} className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-4 py-2 text-brand-dark"><Icon name="pin" className="h-5 w-5" />{c}</li>)}</ul>
            </div>
            <iframe title="Map of the Round Lake area, Ontario" src="https://maps.google.com/maps?q=Round%20Lake%20Centre%2C%20Ontario&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-[340px] w-full rounded-2xl border border-line" />
          </div>
        </section>

        <section id="faq" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[820px] px-5">
            <h2>Questions, Answered</h2>
            <div className="mt-8 space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="rounded-2xl bg-card px-5">
                  <summary className="flex min-h-[64px] items-center justify-between gap-4 py-4 text-lg font-extrabold text-brand-dark">{f.q}<Icon name="plus" className="faq-icon h-5 w-5 shrink-0 text-brand" /></summary>
                  <p className="pb-5 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand text-white">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-7 px-5 py-14 md:flex-row md:items-center md:justify-between md:py-20">
            <div className="max-w-[34rem]"><h2 className="text-white">Ready for a Neater Lawn?</h2><p className="mt-3 text-xl leading-relaxed text-white/90">Call or text Anthony and tell him about your property.</p></div>
            <CallBtn className="w-full md:w-auto" />
          </div>
        </section>
      </main>

      <footer className="bg-brand-dark text-white">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-xl font-black">3 Seasons Lawncare</p>
            <p className="mt-3"><a href={TEL} className="font-extrabold text-cta">{PHONE}</a></p>
            <p className="mt-1 text-white/85">Round Lake area, Eastern Ontario</p>
          </div>
          <div><h3 className="text-white">Services</h3><ul className="mt-3 space-y-1.5 text-white/85">{services.map((s) => <li key={s.name}>{s.name}</li>)}</ul></div>
          <div><h3 className="text-white">Follow along</h3><ul className="mt-3 text-white/85"><li><a href={FB} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center underline underline-offset-4">Facebook</a></li><li><a href={TT} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center underline underline-offset-4">TikTok</a></li><li><a href={MAPS} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center underline underline-offset-4">Google</a></li></ul></div>
        </div>
        <p className="border-t border-white/15 px-5 py-5 text-center text-[1.0625rem] text-white/80">&copy; {new Date().getFullYear()} 3 Seasons Lawncare. All rights reserved.</p>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-card p-2 md:hidden">
        <a href={TEL} className="btn flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-cta font-extrabold text-on-cta"><Icon name="phone" className="h-5 w-5" />Call</a>
        <a href={SMS} className="btn flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-brand font-extrabold text-white"><Icon name="message" className="h-5 w-5" />Text</a>
      </div>
    </>
  );
}
