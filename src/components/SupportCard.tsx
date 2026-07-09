import { ChevronRight } from 'lucide-react';

export function SupportCard() {
  return (
    <aside className="mt-6 rounded-lg bg-orange-50 p-5">
      <h2 className="text-lg font-extrabold text-emberDark">Still have questions?</h2>
      <p className="mt-3 text-sm font-medium leading-6 text-slate-700">
        Can't find the answer you're looking for? Our support team is here to help.
      </p>
      <button
        type="button"
        className="mt-5 flex h-14 w-full items-center justify-center gap-3 rounded-lg bg-ember px-5 text-base font-bold text-white shadow-item transition hover:bg-emberDark focus:outline-none focus:ring-4 focus:ring-orange-200"
      >
        Contact Support
        <ChevronRight size={21} aria-hidden="true" />
      </button>
    </aside>
  );
}
