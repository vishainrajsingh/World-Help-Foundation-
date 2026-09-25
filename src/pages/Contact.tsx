import { useState } from 'react';
import { MapPin, Phone, Mail, CheckCircle2, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import { NGO_INFO } from '../data/ngoData';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-950 to-blue-900 text-white py-16 lg:py-24 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 space-y-4 relative z-10">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-800 text-amber-300 text-xs font-bold uppercase tracking-wider">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Contact World Help Foundation
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto">
            We would love to hear from you. Reach out to our team in Dhanbad, Jharkhand for inquiries, volunteering, or partnerships.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-stone-200 space-y-6">
              <h3 className="text-2xl font-extrabold text-stone-900">Organization Info</h3>

              <div className="space-y-6 text-sm text-stone-700">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-900 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-bold text-stone-900 block mb-1">Registered Address</span>
                    <p className="text-stone-600 leading-relaxed">{NGO_INFO.fullAddress}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-bold text-stone-900 block mb-1">Contact Numbers</span>
                    <p className="text-stone-600">{NGO_INFO.phones.join(', ')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-bold text-stone-900 block mb-1">Official Email</span>
                    <p className="text-stone-600 break-all">{NGO_INFO.emails[0]}</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-stone-200">
                <span className="font-bold text-stone-900 text-sm block mb-3">Follow Us on Social Media</span>
                <div className="flex items-center gap-3">
                  <a href={NGO_INFO.socialLinks.facebook} className="p-3 rounded-xl bg-stone-100 hover:bg-blue-900 hover:text-white transition" aria-label="Facebook">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href={NGO_INFO.socialLinks.instagram} className="p-3 rounded-xl bg-stone-100 hover:bg-blue-900 hover:text-white transition" aria-label="Instagram">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href={NGO_INFO.socialLinks.youtube} className="p-3 rounded-xl bg-stone-100 hover:bg-blue-900 hover:text-white transition" aria-label="YouTube">
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a href={NGO_INFO.socialLinks.linkedin} className="p-3 rounded-xl bg-stone-100 hover:bg-blue-900 hover:text-white transition" aria-label="LinkedIn">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Founder note */}
            <div className="bg-blue-950 text-white rounded-3xl p-8 shadow-xl space-y-3">
              <span className="text-xs text-amber-300 font-bold uppercase tracking-wider">Leadership</span>
              <h4 className="font-bold text-lg">{NGO_INFO.founder}</h4>
              <p className="text-stone-300 text-xs">{NGO_INFO.founderRole}</p>
              <p className="text-stone-300 text-xs italic">"समाज सेवा ही हमारा धर्म है, मानवता ही हमारी पहचान है।"</p>
            </div>
          </div>

          {/* Contact Form & Map */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-stone-200">
              {submitted ? (
                <div className="text-center py-12 space-y-6">
                  <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
                  <h3 className="text-2xl font-bold text-stone-900">Message Submitted Successfully!</h3>
                  <p className="text-stone-600 text-sm">Thank you for reaching out. We will get back to you shortly.</p>
                  <div className="p-3 bg-amber-50 text-amber-900 text-xs font-medium rounded-xl">
                    [CONNECT FORM TO EMAIL / DATABASE]
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-blue-900 text-white rounded-xl text-sm font-bold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-stone-200 pb-4 mb-6">
                    <h3 className="text-xl font-bold text-stone-900">Send Us a Message</h3>
                    <p className="text-stone-500 text-xs mt-1">Fill out the form below and our team will respond as soon as possible.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Full name"
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
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">Subject *</label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        placeholder="Inquiry subject"
                        className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-extrabold text-base shadow-lg transition"
                  >
                    SUBMIT MESSAGE
                  </button>
                </form>
              )}
            </div>

            {/* Google Maps Integration Placeholder */}
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-stone-200 overflow-hidden">
              <div className="h-64 rounded-2xl bg-stone-200 flex flex-col items-center justify-center text-center p-6 border-2 border-dashed border-stone-300 relative">
                <MapPin className="w-10 h-10 text-blue-900 mb-2 animate-bounce" />
                <h4 className="font-bold text-stone-800 text-base">[Google Maps Embed]</h4>
                <p className="text-stone-600 text-xs mt-1">{NGO_INFO.fullAddress}</p>
                <span className="text-[10px] text-stone-500 mt-2">Interactive Map Integration Placeholder</span>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
