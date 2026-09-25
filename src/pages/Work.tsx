import { PROGRAMS, INITIATIVES } from '../data/ngoData';
import { ArrowRight, HeartPulse, BookOpen, Sparkles, Utensils, Award, GraduationCap } from 'lucide-react';

interface WorkProps {
  setCurrentPage: (page: string) => void;
}

export function Work({ setCurrentPage }: WorkProps) {
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
            Our Core Interventions
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            What We Do
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto">
            Providing structured assistance, education support, health camps, and community welfare across Jharkhand.
          </p>
        </div>
      </section>

      {/* Program Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Comprehensive Social Programs
          </h2>
          <p className="text-stone-600 text-base">
            Each program area addresses a critical need in underprivileged communities, focusing on dignity, opportunity, and sustainable impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAMS.map((prog) => (
            <div 
              key={prog.id}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition border border-stone-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-800 flex items-center justify-center shadow-sm">
                  {prog.icon === 'HeartPulse' && <HeartPulse className="w-7 h-7" />}
                  {prog.icon === 'BookOpen' && <BookOpen className="w-7 h-7" />}
                  {prog.icon === 'Sparkles' && <Sparkles className="w-7 h-7" />}
                  {prog.icon === 'Utensils' && <Utensils className="w-7 h-7" />}
                  {prog.icon === 'ShieldAlert' && <Award className="w-7 h-7" />}
                  {prog.icon === 'GraduationCap' && <GraduationCap className="w-7 h-7" />}
                </div>

                <div>
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">{prog.hindiTitle}</span>
                  <h3 className="text-xl font-bold text-stone-900">{prog.title}</h3>
                </div>

                <p className="text-stone-600 text-sm leading-relaxed">
                  {prog.description}
                </p>

                <p className="text-stone-500 text-xs leading-relaxed pt-2 border-t border-stone-100">
                  {prog.fullDetails}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-100">
                <button
                  onClick={() => navigate('donate')}
                  className="w-full py-2.5 rounded-xl bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs transition flex items-center justify-center gap-2"
                >
                  Support This Program <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Initiatives Section */}
      <section className="bg-stone-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider">
              Recent Projects
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
              Our Active Initiatives
            </h2>
            <p className="text-stone-600 text-base">
              See how our grassroots initiatives are making a tangible difference in villages across Dhanbad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {INITIATIVES.map((init) => (
              <div key={init.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200 flex flex-col sm:flex-row">
                <div className="sm:w-1/2 h-64 sm:h-auto">
                  <img 
                    id={init.id === 'init-2' ? 'education-program-image' : undefined} 
                    src={init.image} 
                    alt={init.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="sm:w-1/2 p-8 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-xs text-stone-500 font-semibold block">📍 {init.location}</span>
                    <h3 className="text-xl font-bold text-stone-900">{init.title}</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">{init.description}</p>
                  </div>
                  <div>
                    <div className="p-3 rounded-xl bg-amber-50 text-amber-900 text-xs font-semibold mb-4">
                      ✨ {init.impact}
                    </div>
                    <button
                      onClick={() => navigate('donate')}
                      className="w-full py-2.5 rounded-xl bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs transition text-center"
                    >
                      Contribute Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-blue-950 text-white rounded-3xl p-10 sm:p-14 space-y-6">
          <h3 className="text-2xl sm:text-4xl font-extrabold">Want to Help Expand Our Work?</h3>
          <p className="text-stone-300 max-w-xl mx-auto text-sm sm:text-base">
            Join hands with World Help Foundation as a volunteer or donor to bring positive change to more communities.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => navigate('volunteer')}
              className="px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm transition shadow-md"
            >
              Become a Volunteer
            </button>
            <button
              onClick={() => navigate('donate')}
              className="px-8 py-3.5 rounded-xl bg-white hover:bg-stone-100 text-stone-900 font-bold text-sm transition shadow-md"
            >
              Make a Donation
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
