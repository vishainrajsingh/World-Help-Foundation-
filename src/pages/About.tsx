import { ShieldCheck, Award, Heart, CheckCircle2, MapPin } from 'lucide-react';
import { NGO_INFO } from '../data/ngoData';

interface AboutProps {
  setCurrentPage: (page: string) => void;
}

export function About({ setCurrentPage }: AboutProps) {
  return (
    <div className="space-y-16 pb-16">
      
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-950 to-blue-900 text-white py-16 lg:py-24 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 space-y-4 relative z-10">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-800 text-amber-300 text-xs font-bold uppercase tracking-wider">
            About World Help Foundation
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Who We Are
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto">
            Dedicated to uplifting underprivileged children and vulnerable communities in Dhanbad, Jharkhand through meaningful compassion and action.
          </p>
        </div>
      </section>

      {/* Main Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl font-extrabold text-stone-900">
              Building a Dignified Future for Those in Need
            </h2>
            <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
              {NGO_INFO.name} is a social-impact organization based in {NGO_INFO.location}, dedicated to supporting children and people facing financial, educational and social challenges.
            </p>
            <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
              The organization focuses on helping vulnerable communities access opportunities, support and resources that can contribute to a better future. Guided by our motto — <span className="font-semibold text-blue-900">"{NGO_INFO.tagline}"</span> — our team and volunteers work tirelessly across rural and urban pockets of Jharkhand.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-sm flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-blue-800 shrink-0" />
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">Official Registration</h4>
                  <p className="text-stone-500 text-xs mt-0.5">{NGO_INFO.registrationNo}</p>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-sm flex items-center gap-3">
                <Award className="w-8 h-8 text-amber-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">Legal Status</h4>
                  <p className="text-stone-500 text-xs mt-0.5">{NGO_INFO.establishedUnder}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-blue-900">
              <img
                src="/src/assets/images/regenerated_image_1790234492727.jpg"
                alt="World Help Foundation activities"
                className="w-full h-[380px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-stone-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-stone-200/80 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-900 flex items-center justify-center font-bold text-2xl">
                🔭
              </div>
              <h3 className="text-2xl font-extrabold text-stone-900">Our Vision</h3>
              <p className="text-stone-700 text-base sm:text-lg italic leading-relaxed">
                "To create a society where every child has the opportunity to learn, grow, dream and build a dignified future."
              </p>
              <ul className="space-y-2 pt-2 text-stone-600 text-sm">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-700" /> Universal access to basic learning and support</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-700" /> Eradicating educational barriers for needy children</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-stone-200/80 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-2xl">
                🎯
              </div>
              <h3 className="text-2xl font-extrabold text-stone-900">Our Mission</h3>
              <p className="text-stone-700 text-base sm:text-lg italic leading-relaxed">
                "To support underprivileged children and vulnerable communities through education, assistance, community engagement and sustainable initiatives."
              </p>
              <ul className="space-y-2 pt-2 text-stone-600 text-sm">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-600" /> Active community relief and welfare camps</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-600" /> Transparent collaboration with supporters and volunteers</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-900 to-blue-950 text-white rounded-3xl p-8 sm:p-14 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-4 text-center">
              <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-full bg-amber-500 mx-auto overflow-hidden shadow-2xl border-4 border-amber-300 flex items-center justify-center">
                <img src={NGO_INFO.founderImage} alt={NGO_INFO.founder} className="w-full h-full object-cover object-top" style={{ objectPosition: 'center 20%' }} />
              </div>
              <h3 className="text-2xl font-extrabold text-white mt-4">{NGO_INFO.founder}</h3>
              <p className="text-amber-300 text-sm font-medium mt-1">{NGO_INFO.founderRole}</p>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <span className="px-3.5 py-1.5 rounded-full bg-blue-800 text-amber-300 text-xs font-bold uppercase tracking-wider">
                Meet Our Founder
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                "समाज सेवा ही हमारा धर्म है, मानवता ही हमारी पहचान है।"
              </h2>
              <p className="text-stone-300 text-base leading-relaxed">
                Founded with a profound commitment to grassroots social welfare, World Help Foundation operates under the visionary leadership of Shri Govind Mohan. As a practitioner tax consultant and dedicated social activist, he has directed his efforts toward uplifting disadvantaged children, organizing healthcare camps, and ensuring winter warmth for impoverished families across Dhanbad and Jharkhand.
              </p>
              <div className="p-4 rounded-2xl bg-blue-900/60 border border-blue-800 text-xs sm:text-sm text-stone-200">
                <span className="text-amber-300 font-bold block mb-1">Founder's Pledge:</span>
                "We believe that true community development occurs when every individual extends a helping hand. Our mission is to ensure no child is left behind due to lack of resources."
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Office & Location */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm max-w-2xl mx-auto space-y-4">
          <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center mx-auto">
            <MapPin className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-stone-900">Registered Office Location</h3>
          <p className="text-stone-600 text-sm">{NGO_INFO.fullAddress}</p>
          <div className="pt-2 text-xs text-stone-500">
            Contact: {NGO_INFO.phones.join(' • ')}
          </div>
        </div>
      </section>

    </div>
  );
}
