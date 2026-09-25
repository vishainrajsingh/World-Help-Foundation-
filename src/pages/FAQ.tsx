import { useState } from 'react';
import { FAQS } from '../data/ngoData';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-950 to-blue-900 text-white py-16 lg:py-24 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 space-y-4 relative z-10">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-800 text-amber-300 text-xs font-bold uppercase tracking-wider">
            Got Questions?
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto">
            Find answers to common questions about World Help Foundation, our initiatives, volunteering, and donations.
          </p>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm transition"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 focus:outline-none"
                >
                  <span className="font-bold text-stone-900 text-base sm:text-lg">{faq.question}</span>
                  <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-700 shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-stone-600 text-sm sm:text-base leading-relaxed border-t border-stone-100 pt-4 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
