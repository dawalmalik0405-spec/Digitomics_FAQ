import { ChevronDown } from 'lucide-react';
import type { Faq } from '../data/faqData';

type FaqAccordionProps = {
  faqs: Faq[];
  openFaqId: string;
  onToggle: (faqId: string) => void;
};

export function FaqAccordion({ faqs, openFaqId, onToggle }: FaqAccordionProps) {
  return (
    <section aria-label="Frequently asked questions" className="grid gap-3">
      {faqs.map((faq) => {
        const open = faq.id === openFaqId;

        return (
          <article
            key={faq.id}
            className={`overflow-hidden rounded-lg border bg-white transition ${
              open ? 'border-orange-200 shadow-item' : 'border-slate-200'
            }`}
          >
            <button
              type="button"
              className="flex min-h-[58px] w-full items-center justify-between gap-4 px-5 text-left"
              onClick={() => onToggle(faq.id)}
              aria-expanded={open}
              aria-controls={`${faq.id}-answer`}
            >
              <span className="text-base font-extrabold leading-6 text-ink sm:text-lg">
                {faq.question}
              </span>
              <ChevronDown
                size={22}
                className={`shrink-0 text-ember transition ${open ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>
            <div
              id={`${faq.id}-answer`}
              className={`grid transition-all duration-200 ${
                open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <p className="border-t border-orange-100 px-5 pb-5 pt-4 text-sm font-medium leading-6 text-slate-600 sm:text-base">
                  {faq.answer}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
