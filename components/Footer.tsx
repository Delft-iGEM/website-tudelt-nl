export default function Footer() {
  return (
    <footer className="bg-[#212121] text-[#A3A3A3]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-3 px-6 py-5 md:px-10">
        <img
          src="/images/logo-igem-tudelft.png"
          alt="iGEM TU Delft logo"
          className="block h-10 w-auto"
        />
        <p className="text-[13px]">
          iGEM TU Delft · Delft University of Technology, the Netherlands ·{" "}
          <a
            href="mailto:igem@tudelft.nl"
            className="font-semibold text-white no-underline hover:text-green hover:underline"
          >
            igem@tudelft.nl
          </a>
        </p>
      </div>
    </footer>
  );
}
