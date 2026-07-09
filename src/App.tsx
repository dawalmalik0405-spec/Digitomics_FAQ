import { useMemo, useState } from 'react';
import { CategoryList } from './components/CategoryList';
import { FaqAccordion } from './components/FaqAccordion';
import { Hero } from './components/Hero';
import { SupportCard } from './components/SupportCard';
import { categories, faqs } from './data/faqData';

function App() {
  const [activeCategoryId, setActiveCategoryId] = useState(categories[0].id);
  const [openFaqId, setOpenFaqId] = useState(faqs[0].id);

  const activeFaqs = useMemo(() => {
    const categoryFaqs = faqs.filter((faq) => faq.categoryId === activeCategoryId);
    return categoryFaqs.length > 0 ? categoryFaqs : faqs;
  }, [activeCategoryId]);

  const visibleFaqs = activeCategoryId === categories[0].id ? faqs : activeFaqs;

  function handleCategorySelect(categoryId: string) {
    setActiveCategoryId(categoryId);
    const firstFaq = faqs.find((faq) => faq.categoryId === categoryId);
    setOpenFaqId(firstFaq?.id ?? faqs[0].id);
  }

  function handleFaqToggle(faqId: string) {
    setOpenFaqId((current) => (current === faqId ? '' : faqId));
  }

  return (
    <main className="min-h-screen bg-cloud">
      <Hero />
      <section className="relative mx-auto max-w-[1500px] px-4 pb-10 sm:px-8 lg:px-12">
        <div className="absolute inset-x-4 bottom-0 top-24 rounded-2xl bg-ember sm:inset-x-8 lg:inset-x-12" />
        <div className="relative mx-auto grid max-w-[1240px] gap-8 rounded-2xl bg-white p-6 shadow-panel sm:p-8 lg:grid-cols-[340px_1fr] lg:p-12">
          <div className="sticky top-6 self-start">
            <CategoryList
              categories={categories}
              activeCategoryId={activeCategoryId}
              onSelect={handleCategorySelect}
            />
            <SupportCard />
          </div>
          <FaqAccordion faqs={visibleFaqs} openFaqId={openFaqId} onToggle={handleFaqToggle} />
        </div>
      </section>
    </main>
  );
}

export default App;
