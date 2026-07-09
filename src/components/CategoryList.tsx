import { ChevronRight } from 'lucide-react';
import type { Category } from '../data/faqData';

type CategoryListProps = {
  categories: Category[];
  activeCategoryId: string;
  onSelect: (categoryId: string) => void;
};

export function CategoryList({ categories, activeCategoryId, onSelect }: CategoryListProps) {
  return (
    <section aria-labelledby="category-heading">
      <h2 id="category-heading" className="mb-5 text-lg font-extrabold text-ink">
        Browse by Category
      </h2>
      <div className="grid gap-3">
        {categories.map((category) => {
          const Icon = category.icon;
          const active = category.id === activeCategoryId;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onSelect(category.id)}
              className={`group flex min-h-[72px] w-full items-center gap-4 rounded-lg border bg-white px-4 text-left transition ${
                active
                  ? 'border-orange-300 bg-orange-50 shadow-item'
                  : 'border-slate-200 hover:border-orange-200 hover:shadow-item'
              }`}
              aria-pressed={active}
            >
              <span
                className={`grid h-11 w-11 shrink-0 place-items-center rounded-lg ${
                  active ? 'bg-ember text-white' : 'bg-orange-50 text-ember'
                }`}
              >
                <Icon size={24} strokeWidth={2.1} aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-base font-extrabold text-ink">
                  {category.label}
                </span>
                <span className="mt-1 block text-sm font-semibold text-slate-500">
                  {category.articleCount} articles
                </span>
              </span>
              <ChevronRight
                className={active ? 'text-ember' : 'text-slate-500 group-hover:text-ember'}
                size={22}
                aria-hidden="true"
              />
            </button>
          );
        })}
      </div>
    </section>
  );
}
