import { useState } from 'react';
import { NEWS_ITEMS, NewsItem } from '../data/ngoData';
import { Calendar, ArrowRight, X } from 'lucide-react';

export function News() {
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);

  return (
    <div className="space-y-16 pb-16">
      
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-950 to-blue-900 text-white py-16 lg:py-24 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 space-y-4 relative z-10">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-800 text-amber-300 text-xs font-bold uppercase tracking-wider">
            Latest Updates
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            News & Stories
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto">
            Stay informed about our latest welfare camps, educational outreach drives, and community announcements.
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEWS_ITEMS.map((news) => (
            <div key={news.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200 flex flex-col justify-between group hover:shadow-xl transition">
              <div>
                <div className="h-52 overflow-hidden relative">
                  <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  <span className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-lg">
                    {news.category}
                  </span>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-stone-400">
                    <Calendar className="w-3.5 h-3.5" /> {news.date}
                  </div>
                  <h3 className="font-extrabold text-stone-900 text-lg leading-snug">{news.title}</h3>
                  <p className="text-stone-600 text-xs leading-relaxed">{news.summary}</p>
                </div>
              </div>

              <div className="p-6 pt-0 mt-auto">
                <button
                  onClick={() => setSelectedArticle(news)}
                  className="w-full py-3 rounded-xl bg-blue-50 hover:bg-blue-900 hover:text-white text-blue-900 font-bold text-xs transition flex items-center justify-center gap-2"
                >
                  Read Full Article <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 space-y-6 relative animate-fadeIn">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">
              {selectedArticle.category}
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 leading-tight">
              {selectedArticle.title}
            </h2>

            <div className="flex items-center gap-2 text-xs text-stone-500">
              <Calendar className="w-4 h-4" /> {selectedArticle.date} • World Help Foundation
            </div>

            <div className="rounded-2xl overflow-hidden h-64">
              <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover" />
            </div>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              {selectedArticle.content}
            </p>

            <div className="pt-6 border-t border-stone-100 text-right">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-6 py-2.5 bg-blue-900 text-white rounded-xl text-sm font-bold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
