import { useState } from 'react';
import { Heart, Users, ArrowRight, ShieldCheck, BookOpen, HeartPulse, Sparkles, Utensils, Award, CheckCircle2, ZoomIn, X } from 'lucide-react';
import { NGO_INFO, PROGRAMS, INITIATIVES, STORIES } from '../data/ngoData';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

export function Home({ setCurrentPage }: HomeProps) {
  const [showBannerModal, setShowBannerModal] = useState(false);

  const navigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const officialBannerUrl = "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000";

  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-800/80 border border-blue-700 text-amber-300 text-xs sm:text-sm font-semibold shadow-sm">
                <ShieldCheck className="w-4 h-4" /> Reg. No: {NGO_INFO.registrationNo} • {NGO_INFO.establishedUnder}
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Helping Children. <span className="text-amber-400">Empowering Communities.</span> Building Futures.
              </h1>

              <p className="text-stone-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                "{NGO_INFO.name} works to support underprivileged children, vulnerable families and people in need by creating opportunities, providing assistance and helping communities move toward a brighter future in {NGO_INFO.location}."
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <button
                  onClick={() => navigate('donate')}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-extrabold text-base shadow-xl shadow-orange-600/30 transition flex items-center justify-center gap-3 transform hover:-translate-y-0.5"
                >
                  <Heart className="w-5 h-5 fill-white" /> DONATE NOW
                </button>
                <button
                  onClick={() => navigate('get-involved')}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-base transition flex items-center justify-center gap-3"
                >
                  <Users className="w-5 h-5" /> JOIN OUR COMMUNITY
                </button>
              </div>

              <div className="pt-6 border-t border-blue-800/80 flex items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm text-stone-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>100,000+ Target Lives Impact</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Transparent Relief Drives</span>
                </div>
              </div>
            </div>

            {/* Hero Visual Card (Selected Element Showcase for Official Banner) */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 via-orange-500 to-blue-600 rounded-3xl blur-xl opacity-40 animate-pulse"></div>
                <div 
                  onClick={() => setShowBannerModal(true)}
                  className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-400 bg-blue-950 group cursor-pointer transform hover:scale-[1.01] transition duration-300"
                >
                  <div className="relative h-[420px] overflow-hidden">
                    <img
                      src={officialBannerUrl}
                      alt="World Help Foundation Official Campaign Banner"
                      className="w-full h-full object-contain bg-blue-950 p-3 group-hover:scale-102 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/40 to-transparent flex flex-col justify-between p-6">
                      <div className="flex justify-between items-start">
                        <span className="bg-amber-500 text-blue-950 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                          Official Banner
                        </span>
                        <span className="p-2 rounded-full bg-black/60 text-white backdrop-blur-sm group-hover:bg-amber-500 group-hover:text-blue-950 transition">
                          <ZoomIn className="w-5 h-5" />
                        </span>
                      </div>
                      <div className="space-y-1">
                        <span className="text-amber-300 text-xs font-bold tracking-wider uppercase block">Dhanbad, Jharkhand • Reg. No: 2026/DHAN/1126/BK4/107</span>
                        <h3 className="text-white font-extrabold text-xl">"हर हाथ को सहायता, हर जीवन में आशा"</h3>
                        <p className="text-stone-200 text-xs font-medium">Click to view official campaign banner & trust details</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Official Banner Zoom Modal */}
      {showBannerModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200 border-4 border-amber-400">
            <button
              onClick={() => setShowBannerModal(false)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-blue-950 text-white hover:bg-orange-600 transition shadow-lg"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="max-h-[70vh] overflow-hidden bg-stone-950 flex items-center justify-center p-2">
              <img src={officialBannerUrl} alt="World Help Foundation Official Campaign Banner" className="max-h-[68vh] object-contain w-full rounded-2xl" />
            </div>
            <div className="p-6 bg-blue-950 text-white space-y-2 text-center">
              <span className="text-amber-300 text-xs font-bold uppercase tracking-widest block">World Help Foundation • Official Campaign Banner</span>
              <h3 className="text-xl font-extrabold">Registered under Indian Trust Act 1882 • Reg. No: {NGO_INFO.registrationNo}</h3>
              <p className="text-stone-300 text-xs">Founder: {NGO_INFO.founder} ({NGO_INFO.founderRole}) • Office: {NGO_INFO.fullAddress}</p>
            </div>
          </div>
        </div>
      )}

      {/* Impact Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl border border-stone-100 p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-stone-100">
          
          <div className="text-center pt-4 md:pt-0">
            <span className="text-4xl lg:text-5xl font-extrabold text-blue-900 block mb-2">100,000+</span>
            <span className="text-stone-600 font-semibold text-sm uppercase tracking-wider block">Lives We Aim to Uplift</span>
            <span className="text-stone-400 text-xs mt-1 block">Organizational Goal & Impact</span>
          </div>

          <div className="text-center pt-6 md:pt-0">
            <span className="text-4xl lg:text-5xl font-extrabold text-amber-600 block mb-2">500+</span>
            <span className="text-stone-600 font-semibold text-sm uppercase tracking-wider block">Children & Families Supported</span>
            <span className="text-stone-400 text-xs mt-1 block">Through Active Relief Drives</span>
          </div>

          <div className="text-center pt-6 md:pt-0">
            <span className="text-4xl lg:text-5xl font-extrabold text-blue-900 block mb-2">10+</span>
            <span className="text-stone-600 font-semibold text-sm uppercase tracking-wider block">Community Initiatives</span>
            <span className="text-stone-400 text-xs mt-1 block">Education, Health & Warmth</span>
          </div>

          <div className="text-center pt-6 md:pt-0">
            <span className="text-4xl lg:text-5xl font-extrabold text-orange-600 block mb-2">50+</span>
            <span className="text-stone-600 font-semibold text-sm uppercase tracking-wider block">Dedicated Volunteers</span>
            <span className="text-stone-400 text-xs mt-1 block">Working Across Jharkhand</span>
          </div>

        </div>
      </section>

      {/* About Section Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-wider">
              Who We Are
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
              Dedicated to Uplifting Underprivileged Children and Needy Families
            </h2>

            <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
              {NGO_INFO.name} is a social-impact organization based in {NGO_INFO.location}, dedicated to supporting children and people facing financial, educational, and social challenges.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-stone-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center shrink-0 font-bold">
                  🎯
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-base">Our Vision</h4>
                  <p className="text-stone-600 text-sm mt-1">"To create a society where every child has the opportunity to learn, grow, dream and build a dignified future."</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-stone-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 font-bold">
                  🚀
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-base">Our Mission</h4>
                  <p className="text-stone-600 text-sm mt-1">"To support underprivileged children and vulnerable communities through education, assistance, community engagement and sustainable initiatives."</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => navigate('about')}
                className="px-6 py-3 rounded-xl bg-blue-900 hover:bg-blue-950 text-white font-bold text-sm shadow-md transition flex items-center gap-2"
              >
                Read More About Us <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-3xl p-8 border border-stone-200/60 shadow-lg space-y-6">
              <div className="flex items-center gap-4 pb-6 border-b border-stone-200">
                <img 
                  src={NGO_INFO.founderImage} 
                  alt={NGO_INFO.founder}
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-amber-500 shadow-md"
                />
                <div>
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">Founder Profile</span>
                  <h3 className="text-xl font-extrabold text-stone-900">{NGO_INFO.founder}</h3>
                  <p className="text-xs text-stone-500 mt-0.5">{NGO_INFO.founderRole}</p>
                </div>
              </div>

              <blockquote className="text-stone-700 italic text-sm sm:text-base leading-relaxed">
                "समाज सेवा ही हमारा धर्म है, मानवता ही हमारी पहचान है। Together, we can help build a better future for children and communities in need across Dhanbad and Jharkhand."
              </blockquote>

              <div className="pt-2">
                <div className="text-xs text-stone-500 uppercase tracking-wider font-semibold">Registered Office:</div>
                <p className="text-stone-800 text-sm font-medium mt-1">{NGO_INFO.fullAddress}</p>
              </div>

              <button
                onClick={() => navigate('about')}
                className="w-full py-3 rounded-xl bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 font-bold text-sm text-center transition shadow-sm"
              >
                View Leadership & Legal Details
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* What We Do / Program Areas */}
      <section className="bg-stone-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
              Our Core Programs
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
              What We Do for Vulnerable Communities
            </h2>
            <p className="text-stone-600 text-base">
              Discover our key areas of intervention designed to provide meaningful assistance, education, and long-term support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROGRAMS.map((prog) => (
              <div 
                key={prog.id}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-200/80 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 group-hover:bg-blue-900 text-blue-700 group-hover:text-white transition-colors duration-300 flex items-center justify-center shadow-sm">
                    {prog.icon === 'HeartPulse' && <HeartPulse className="w-7 h-7" />}
                    {prog.icon === 'BookOpen' && <BookOpen className="w-7 h-7" />}
                    {prog.icon === 'Sparkles' && <Sparkles className="w-7 h-7" />}
                    {prog.icon === 'Utensils' && <Utensils className="w-7 h-7" />}
                    {prog.icon === 'ShieldAlert' && <Award className="w-7 h-7" />}
                    {prog.icon === 'GraduationCap' && <BookOpen className="w-7 h-7" />}
                  </div>

                  <div>
                    <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">{prog.hindiTitle}</span>
                    <h3 className="text-xl font-bold text-stone-900 group-hover:text-blue-900 transition">{prog.title}</h3>
                  </div>

                  <p className="text-stone-600 text-sm leading-relaxed">
                    {prog.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between">
                  <button
                    onClick={() => navigate('work')}
                    className="text-xs font-bold text-blue-800 hover:text-orange-600 transition flex items-center gap-1.5"
                  >
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-xs text-stone-400">Active Initiative</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => navigate('work')}
              className="px-8 py-3.5 rounded-xl bg-blue-900 hover:bg-blue-950 text-white font-bold text-sm shadow-md transition inline-flex items-center gap-2"
            >
              Explore All Programs & Activities <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* Featured Initiatives */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div className="space-y-3">
            <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider">
              On-Ground Impact
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
              Featured Initiatives & Relief Drives
            </h2>
          </div>
          <button
            onClick={() => navigate('work')}
            className="text-sm font-bold text-blue-800 hover:text-orange-600 transition flex items-center gap-1.5"
          >
            View All Projects <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INITIATIVES.map((init) => (
            <div key={init.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition border border-stone-200 flex flex-col justify-between">
              <div>
                <div className="h-48 overflow-hidden relative">
                  <img src={init.image} alt={init.title} className="w-full h-full object-cover hover:scale-105 transition duration-500" />
                  <span className="absolute top-3 left-3 bg-blue-900/90 text-white text-xs font-bold px-3 py-1 rounded-lg backdrop-blur-sm">
                    {init.category}
                  </span>
                </div>
                <div className="p-5 space-y-2">
                  <span className="text-xs text-stone-500 block">📍 {init.location}</span>
                  <h3 className="font-bold text-stone-900 text-base leading-snug">{init.title}</h3>
                  <p className="text-stone-600 text-xs line-clamp-2">{init.description}</p>
                </div>
              </div>
              <div className="p-5 pt-0 mt-auto">
                <div className="p-2.5 rounded-xl bg-amber-50 text-amber-900 text-xs font-semibold mb-4">
                  ✨ {init.impact}
                </div>
                <button
                  onClick={() => navigate('work')}
                  className="w-full py-2.5 rounded-xl bg-stone-100 hover:bg-blue-900 hover:text-white text-stone-800 font-bold text-xs transition text-center"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stories That Inspire Us */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="px-3 py-1 rounded-full bg-blue-800 text-amber-300 text-xs font-bold uppercase tracking-wider">
              Stories That Inspire Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Real Lives, Real Hope
            </h2>
            <p className="text-stone-300 text-sm">
              Read respectful accounts of how community support and education initiatives bring meaningful change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STORIES.map((story) => (
              <div key={story.id} className="bg-blue-950/80 rounded-3xl p-6 border border-blue-800/80 flex flex-col justify-between shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <img src={story.image} alt={story.name} className="w-14 h-14 rounded-full object-cover border-2 border-amber-400" />
                    <div>
                      <h4 className="font-bold text-white text-base">{story.name}</h4>
                      <span className="text-xs text-amber-300">📍 {story.location}</span>
                    </div>
                  </div>
                  <p className="text-stone-300 text-sm italic leading-relaxed">
                    "{story.story}"
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-blue-900 text-xs font-semibold text-amber-400 flex items-center justify-between">
                  <span>Impact: {story.impact}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => navigate('stories')}
              className="px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-sm shadow-lg transition"
            >
              Read All Impact Stories
            </button>
          </div>

        </div>
      </section>

      {/* Why Support Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Trust & Credibility
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Why Your Support Matters
          </h2>
          <p className="text-stone-600 text-base">
            Donations and community participation empower us to provide essential resources, education, and hope to families facing hardship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 rounded-3xl border border-stone-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-xl">🤝</div>
            <h3 className="text-lg font-bold text-stone-900">Direct Community Support</h3>
            <p className="text-stone-600 text-sm leading-relaxed">Every contribution directly reaches rural pockets and vulnerable families in Jharkhand with transparent accountability.</p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-stone-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xl">👶</div>
            <h3 className="text-lg font-bold text-stone-900">Focus on Children</h3>
            <p className="text-stone-600 text-sm leading-relaxed">Prioritizing school supplies, education kits, and child welfare so young minds can dream without barriers.</p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-stone-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xl">🛡️</div>
            <h3 className="text-lg font-bold text-stone-900">Transparent Communication</h3>
            <p className="text-stone-600 text-sm leading-relaxed">Registered under Indian Trust Act 1882 (Reg. No. {NGO_INFO.registrationNo}) with full dedication to honest reporting.</p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-stone-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-800 flex items-center justify-center font-bold text-xl">🌱</div>
            <h3 className="text-lg font-bold text-stone-900">Long-Term Empowerment</h3>
            <p className="text-stone-600 text-sm leading-relaxed">Moving beyond temporary aid toward sustainable skill development, health awareness, and community upliftment.</p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-stone-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-xl">👥</div>
            <h3 className="text-lg font-bold text-stone-900">Volunteer Participation</h3>
            <p className="text-stone-600 text-sm leading-relaxed">Empowering local youth and passionate citizens to take active roles in social welfare and distribution camps.</p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-stone-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-xl">✨</div>
            <h3 className="text-lg font-bold text-stone-900">Compassionate Action</h3>
            <p className="text-stone-600 text-sm leading-relaxed">Guided by our motto: "हर हाथ को सहायता, हर जीवन में आशा" with respect and dignity for all beneficiaries.</p>
          </div>

        </div>
      </section>

      {/* Final Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-amber-500 via-orange-600 to-amber-600 rounded-3xl p-8 sm:p-14 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              Join Our Mission
            </span>
            
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Together, We Can Help Build a Better Future
            </h2>

            <p className="text-stone-100 text-base sm:text-lg max-w-2xl mx-auto">
              Whether through a small contribution, volunteering your time, or spreading the word, your participation makes a lasting difference.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => navigate('donate')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-950 hover:bg-blue-900 text-white font-extrabold text-base shadow-xl transition flex items-center justify-center gap-3"
              >
                <Heart className="w-5 h-5 fill-amber-400 text-amber-400" /> DONATE NOW
              </button>
              <button
                onClick={() => navigate('volunteer')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-stone-100 text-stone-900 font-extrabold text-base shadow-xl transition flex items-center justify-center gap-3"
              >
                <Users className="w-5 h-5 text-blue-900" /> BECOME A VOLUNTEER
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
