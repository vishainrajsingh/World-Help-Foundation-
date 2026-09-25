import { Heart, ShieldCheck, Users, Award, BookOpen } from 'lucide-react';
import { NGO_INFO, STORIES } from '../data/ngoData';

interface ImpactProps {
  setCurrentPage: (page: string) => void;
}

export function Impact({ setCurrentPage }: ImpactProps) {
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
            Social Impact & Transparency
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Our Impact
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto">
            Working toward uplifting 100,000 lives through dedicated community support, education, and welfare initiatives in Jharkhand.
          </p>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-200 text-center space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-900 flex items-center justify-center mx-auto text-2xl font-bold">🎯</div>
            <span className="text-4xl font-extrabold text-blue-900 block">100,000+</span>
            <span className="text-stone-700 font-bold text-sm block">Lives We Aim to Uplift</span>
            <span className="text-stone-400 text-xs block">Long-term organizational goal</span>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-200 text-center space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mx-auto text-2xl font-bold">👶</div>
            <span className="text-4xl font-extrabold text-amber-600 block">500+</span>
            <span className="text-stone-700 font-bold text-sm block">Children Supported</span>
            <span className="text-stone-400 text-xs block">School kits & learning aids</span>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-200 text-center space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto text-2xl font-bold">🏡</div>
            <span className="text-4xl font-extrabold text-emerald-700 block">10+</span>
            <span className="text-stone-700 font-bold text-sm block">Village Initiatives</span>
            <span className="text-stone-400 text-xs block">Blankets, food & health camps</span>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-200 text-center space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-800 flex items-center justify-center mx-auto text-2xl font-bold">👥</div>
            <span className="text-4xl font-extrabold text-purple-700 block">50+</span>
            <span className="text-stone-700 font-bold text-sm block">Active Volunteers</span>
            <span className="text-stone-400 text-xs block">Dedicated field workers</span>
          </div>

        </div>
      </section>

      {/* Stories of Impact */}
      <section className="bg-stone-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider">
              Stories That Inspire Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
              Real Lives Touched by Compassion
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STORIES.map((story) => (
              <div key={story.id} className="bg-white rounded-3xl p-8 shadow-sm border border-stone-200 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <img src={story.image} alt={story.name} className="w-14 h-14 rounded-full object-cover border-2 border-amber-500" />
                    <div>
                      <h4 className="font-bold text-stone-900 text-base">{story.name}</h4>
                      <span className="text-xs text-stone-500">📍 {story.location}</span>
                    </div>
                  </div>
                  <p className="text-stone-700 text-sm italic leading-relaxed">
                    "{story.story}"
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-stone-100 text-xs font-bold text-blue-900">
                  Impact: {story.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-900 to-blue-950 text-white rounded-3xl p-8 sm:p-14 shadow-xl space-y-8">
          <div className="max-w-3xl space-y-4">
            <span className="px-3.5 py-1.5 rounded-full bg-blue-800 text-amber-300 text-xs font-bold uppercase tracking-wider">
              Transparency & Accountability
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Our Commitment to Trust
            </h2>
            <p className="text-stone-300 text-base">
              World Help Foundation operates with strict adherence to legal and financial transparency. We believe every donor and supporter deserves full clarity on how resources are utilized.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            <div className="bg-blue-950 p-6 rounded-2xl border border-blue-800 space-y-2">
              <ShieldCheck className="w-8 h-8 text-amber-400" />
              <h4 className="font-bold text-white text-base">Legal Registration</h4>
              <p className="text-stone-300 text-xs">Registered under Indian Trust Act 1882. Reg. No.: {NGO_INFO.registrationNo}</p>
            </div>
            <div className="bg-blue-950 p-6 rounded-2xl border border-blue-800 space-y-2">
              <BookOpen className="w-8 h-8 text-amber-400" />
              <h4 className="font-bold text-white text-base">Fund Utilization</h4>
              <p className="text-stone-300 text-xs">Dedicated allocation toward education, health camps, winter relief, and direct aid.</p>
            </div>
            <div className="bg-blue-950 p-6 rounded-2xl border border-blue-800 space-y-2">
              <Award className="w-8 h-8 text-amber-400" />
              <h4 className="font-bold text-white text-base">Community Reports</h4>
              <p className="text-stone-300 text-xs">Regular updates and documentation of relief distribution drives shared with supporters.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-4 max-w-2xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900">Be Part of Our Impact Story</h3>
          <p className="text-stone-600 text-sm">Your contribution can help us reach more underprivileged children and needy families.</p>
          <div className="flex justify-center gap-4 pt-2">
            <button
              onClick={() => navigate('donate')}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-sm shadow-md"
            >
              Donate Now
            </button>
            <button
              onClick={() => navigate('volunteer')}
              className="px-8 py-3.5 rounded-xl bg-blue-900 text-white font-bold text-sm shadow-md"
            >
              Join as Volunteer
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
