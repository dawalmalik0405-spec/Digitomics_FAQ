export function Hero() {
  return (
    <header className="mx-auto max-w-4xl px-6 pb-12 pt-10 text-center sm:pt-14 lg:pb-16">
      <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-xs font-extrabold uppercase text-ember shadow-sm">
        <span className="h-2 w-2 rounded-full bg-ember" />
        Frequently Asked Questions
      </div>
      <h1 className="text-[2.55rem] font-extrabold leading-[1.06] tracking-normal text-ink sm:text-6xl lg:text-7xl">
        Got Questions?
        <span className="mt-1 block text-ember">We've Got Answers</span>
      </h1>
      <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-slate-600 sm:text-xl">
        Everything you need to know about Digitomics InfraOps, our AI-powered FinOps platform.
      </p>
    </header>
  );
}
