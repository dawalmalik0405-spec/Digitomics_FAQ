import { ChevronRight } from 'lucide-react';

export function SupportCard() {
  return (
    <aside className="rounded-lg bg-orange-50 p-4 lg:mt-6 lg:p-5">
      <h2 className="text-lg font-extrabold text-emberDark">Still have questions?</h2>
      <p className="mt-3 text-sm font-medium leading-6 text-slate-700">
        Can't find the answer you're looking for? Our support team is here to help.
      </p>
      <button
        type="button"
        className="mt-5 flex h-12 w-full items-center justify-center gap-3 rounded-lg bg-ember px-5 text-sm font-bold text-white shadow-item transition hover:bg-emberDark focus:outline-none focus:ring-4 focus:ring-orange-200 sm:h-14 sm:text-base"
      >
        Contact Support
        <ChevronRight size={21} aria-hidden="true" />
      </button>
    </aside>
  );
}
