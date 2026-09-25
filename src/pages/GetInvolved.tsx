import { Users, Heart, Building2, Share2, ArrowRight } from 'lucide-react';

interface GetInvolvedProps {
  setCurrentPage: (page: string) => void;
}

export function GetInvolved({ setCurrentPage }: GetInvolvedProps) {
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
            Be Part of the Change
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Get Involved
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto">
            Meaningful social change requires people, communities, and organizations working together. Discover how you can participate.
          </p>
        </div>
      </section>

      {/* Four Participation Options */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Volunteer */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-stone-200 flex flex-col justify-between group hover:shadow-xl transition">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-900 flex items-center justify-center font-bold text-2xl group-hover:bg-blue-900 group-hover:text-white transition">
                <Users className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold text-blue-800 uppercase tracking-wider block">Option 01</span>
              <h3 className="text-2xl font-extrabold text-stone-900">Become a Volunteer</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Join our active field team in Dhanbad and Jharkhand. Help organize educational sessions, health camps, winter relief distribution drives, and community awareness events.
              </p>
            </div>
            <div className="pt-8">
              <button
                onClick={() => navigate('volunteer')}
                className="w-full py-3.5 rounded-xl bg-blue-900 hover:bg-blue-950 text-white font-bold text-sm transition flex items-center justify-center gap-2 shadow-md"
              >
                Register as Volunteer <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Support a Child / Donate */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-stone-200 flex flex-col justify-between group hover:shadow-xl transition">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-2xl group-hover:bg-amber-600 group-hover:text-white transition">
                <Heart className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block">Option 02</span>
              <h3 className="text-2xl font-extrabold text-stone-900">Support a Child</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Your contribution provides school kits, uniforms, books, and essential educational support to underprivileged children who need a helping hand.
              </p>
            </div>
            <div className="pt-8">
              <button
                onClick={() => navigate('donate')}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-sm transition flex items-center justify-center gap-2 shadow-md"
              >
                Contribute & Support <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Partner With Us */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-stone-200 flex flex-col justify-between group hover:shadow-xl transition">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-2xl group-hover:bg-emerald-700 group-hover:text-white transition">
                <Building2 className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">Option 03</span>
              <h3 className="text-2xl font-extrabold text-stone-900">Partner With Us (CSR)</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                We collaborate with corporate organizations, CSR foundations, schools, colleges, and community groups to amplify social impact and reach more families.
              </p>
            </div>
            <div className="pt-8">
              <button
                onClick={() => navigate('partner')}
                className="w-full py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm transition flex items-center justify-center gap-2 shadow-md"
              >
                Explore Partnerships <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Spread the Word */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-stone-200 flex flex-col justify-between group hover:shadow-xl transition">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-2xl group-hover:bg-purple-700 group-hover:text-white transition">
                <Share2 className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold text-purple-700 uppercase tracking-wider block">Option 04</span>
              <h3 className="text-2xl font-extrabold text-stone-900">Spread the Word</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Help us raise awareness by sharing our mission, impact stories, and relief initiatives with your friends, family, social networks, and colleagues.
              </p>
            </div>
            <div className="pt-8">
              <button
                onClick={() => navigate('contact')}
                className="w-full py-3.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-sm transition flex items-center justify-center gap-2 shadow-md"
              >
                Connect With Us <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
