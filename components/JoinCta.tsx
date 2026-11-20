export default function JoinCta() {
  return (
    <section id="join" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-28 md:px-10 md:pb-32">
        <div
          data-reveal
          className="relative flex flex-wrap items-center justify-between gap-8 overflow-hidden rounded-xl bg-navy px-6 py-12 text-white sm:px-12 md:py-16"
        >
          <img
            src="/images/hero.jpg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 size-full object-cover object-[100%_85%]"
          />
          <span aria-hidden="true" className="fade-join absolute inset-0" />
          <div className="relative flex min-w-0 flex-[999_1_480px] flex-col gap-3">
            <h2 className="text-[clamp(24px,2.6vw,30px)] leading-[1.2] font-extrabold">
              Be part of the next team
            </h2>
            <p className="max-w-[520px] text-[15px] leading-[1.65] text-[#C7D2E8]">
              We recruit students from every faculty at TU Delft. Follow us to
              hear when applications open.
            </p>
          </div>
          <div className="relative flex flex-[1_1_240px] flex-wrap gap-3">
            <a
              href="https://www.instagram.com/igemtudelft/"
              className="inline-flex min-h-11 items-center rounded-lg bg-green px-5 py-3 text-sm font-bold text-[#0A0A0A] no-underline transition-colors hover:bg-[#33E0A8] hover:text-[#0A0A0A]"
            >
              Follow us on Instagram ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
