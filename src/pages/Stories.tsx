import { STORIES } from '../data/ngoData';
import { Heart } from 'lucide-react';

interface StoriesProps {
  setCurrentPage: (page: string) => void;
}

export function Stories({ setCurrentPage }: StoriesProps) {
  const navigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-950 to-blue-900 text-white py-16 lg:py-24 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 space-y-4 relative z-10">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-800 text-amber-300 text-xs font-bold uppercase tracking-wider">
            Verified Beneficiary Accounts
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Stories That Inspire Us
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto">
            Respectful and privacy-conscious accounts of real lives touched by community assistance and education support.
          </p>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STORIES.map((story) => (
            <div key={story.id} className="bg-white rounded-3xl p-8 shadow-sm border border-stone-200 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <img src={story.image} alt={story.name} className="w-16 h-16 rounded-full object-cover border-2 border-amber-500 shadow-sm" />
                  <div>
                    <h3 className="font-extrabold text-stone-900 text-base">{story.name}</h3>
                    <span className="text-xs text-stone-500 block">📍 {story.location}</span>
                  </div>
                </div>
                <p className="text-stone-700 text-sm italic leading-relaxed">
                  "{story.story}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-100 space-y-3">
                <div className="p-3 rounded-xl bg-amber-50 text-amber-900 text-xs font-semibold">
                  ✨ Impact: {story.impact}
                </div>
                <span className="text-[10px] text-stone-400 block text-center">[Verified Beneficiary Story]</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-blue-950 text-white rounded-3xl p-10 space-y-4">
          <h3 className="text-2xl font-extrabold">Help Us Create More Success Stories</h3>
          <p className="text-stone-300 text-sm max-w-lg mx-auto">Your support enables us to reach more children and families in need across Jharkhand.</p>
          <button
            onClick={() => navigate('donate')}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-extrabold text-sm shadow-md transition inline-flex items-center gap-2"
          >
            <Heart className="w-4 h-4 fill-white" /> Support Our Mission
          </button>
        </div>
      </section>

    </div>
  );
}
