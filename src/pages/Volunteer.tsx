import { useState } from 'react';
import { Users, CheckCircle2, ShieldCheck } from 'lucide-react';
import { NGO_INFO } from '../data/ngoData';

export function Volunteer() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    age: '',
    occupation: '',
    areaOfInterest: 'Education Support',
    skills: '',
    availability: 'Weekends',
    motivation: '',
    mode: 'On-site',
    agree: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agree) {
      alert('Please agree to be contacted by World Help Foundation regarding volunteer opportunities.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-950 to-blue-900 text-white py-16 lg:py-24 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 space-y-4 relative z-10">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-800 text-amber-300 text-xs font-bold uppercase tracking-wider">
            Join Our Team
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Volunteer Registration
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto">
            Bring your skills, passion, and compassion to support underprivileged children and communities in Jharkhand.
          </p>
        </div>
      </section>

      {/* Form Container */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-stone-200">
          
          {submitted ? (
            <div className="text-center py-12 space-y-6">
              <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-extrabold text-stone-900">Thank You for Registering!</h2>
              <p className="text-stone-600 max-w-md mx-auto text-base">
                We have successfully received your volunteer application. Our team at {NGO_INFO.name} will reach out to you shortly via phone or email.
              </p>
              <div className="p-4 rounded-2xl bg-amber-50 text-amber-900 text-xs max-w-sm mx-auto font-medium">
                [CONNECT FORM TO EMAIL / DATABASE - APPLICATION RECORDED LOCALLY]
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="px-8 py-3 rounded-xl bg-blue-900 text-white font-bold text-sm shadow-md mt-4"
              >
                Submit Another Response
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-stone-200 pb-4 mb-6">
                <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-900" /> Volunteer Application Form
                </h3>
                <p className="text-stone-500 text-xs mt-1">Please fill out your details below to join as a volunteer with World Help Foundation.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">City / Location *</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    placeholder="e.g., Dhanbad, Ranchi, etc."
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">Age</label>
                  <input
                    type="number"
                    value={formData.age}
                    onChange={(e) => setFormData({...formData, age: e.target.value})}
                    placeholder="Your age"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">Occupation / Profession</label>
                  <input
                    type="text"
                    value={formData.occupation}
                    onChange={(e) => setFormData({...formData, occupation: e.target.value})}
                    placeholder="e.g., Student, Professional, Teacher"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">Area of Interest</label>
                  <select
                    value={formData.areaOfInterest}
                    onChange={(e) => setFormData({...formData, areaOfInterest: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm bg-white"
                  >
                    <option value="Education Support">Education & Child Welfare</option>
                    <option value="Health Camps">Health & Medical Camps</option>
                    <option value="Community Relief">Community Relief & Winter Drives</option>
                    <option value="Event Management">Event & Campaign Coordination</option>
                    <option value="Digital & Social Media">Digital & Social Media Outreach</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">Preferred Mode</label>
                  <select
                    value={formData.mode}
                    onChange={(e) => setFormData({...formData, mode: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm bg-white"
                  >
                    <option value="On-site">On-site (Field / Camps)</option>
                    <option value="Online">Online / Remote</option>
                    <option value="Both">Both On-site & Online</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">Relevant Skills / Experience</label>
                <input
                  type="text"
                  value={formData.skills}
                  onChange={(e) => setFormData({...formData, skills: e.target.value})}
                  placeholder="e.g., Teaching, Graphic Design, Organizing, Medical background"
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">Why would you like to volunteer with us? *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.motivation}
                  onChange={(e) => setFormData({...formData, motivation: e.target.value})}
                  placeholder="Share a few words about your motivation to support World Help Foundation..."
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm"
                />
              </div>

              <div className="flex items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  required
                  id="agree"
                  checked={formData.agree}
                  onChange={(e) => setFormData({...formData, agree: e.target.checked})}
                  className="mt-1 w-4 h-4 text-blue-900 rounded border-stone-300 focus:ring-blue-900"
                />
                <label htmlFor="agree" className="text-xs text-stone-700 leading-relaxed">
                  "I agree to be contacted by World Help Foundation regarding volunteer opportunities and updates." *
                </label>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-extrabold text-base shadow-lg transition"
                >
                  JOIN AS A VOLUNTEER
                </button>
              </div>
            </form>
          )}

        </div>
      </section>

    </div>
  );
}
