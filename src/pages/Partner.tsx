import { useState } from 'react';
import { Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import { NGO_INFO } from '../data/ngoData';

export function Partner() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    orgName: '',
    contactPerson: '',
    email: '',
    phone: '',
    partnerType: 'CSR Partnership',
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
            Collaborative Action
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Let's Create Greater Impact Together
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto">
            Partner with World Help Foundation through CSR initiatives, educational programs, and community support.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl font-extrabold text-stone-900">Partnership Categories</h2>
          <p className="text-stone-600 text-sm">We welcome collaboration across diverse sectors to maximize social upliftment.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-stone-200 text-center space-y-2 shadow-sm">
            <Building2 className="w-8 h-8 text-blue-900 mx-auto" />
            <h4 className="font-bold text-stone-900 text-sm">CSR Organizations</h4>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-stone-200 text-center space-y-2 shadow-sm">
            <Building2 className="w-8 h-8 text-amber-600 mx-auto" />
            <h4 className="font-bold text-stone-900 text-sm">Companies & Businesses</h4>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-stone-200 text-center space-y-2 shadow-sm">
            <Building2 className="w-8 h-8 text-emerald-700 mx-auto" />
            <h4 className="font-bold text-stone-900 text-sm">Schools & Colleges</h4>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-stone-200 text-center space-y-2 shadow-sm">
            <Building2 className="w-8 h-8 text-purple-700 mx-auto" />
            <h4 className="font-bold text-stone-900 text-sm">Community Groups</h4>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-stone-200 text-center space-y-2 shadow-sm">
            <Building2 className="w-8 h-8 text-orange-600 mx-auto" />
            <h4 className="font-bold text-stone-900 text-sm">Foundations & Individuals</h4>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-stone-200">
          {submitted ? (
            <div className="text-center py-12 space-y-6">
              <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
              <h3 className="text-2xl font-bold text-stone-900">Conversation Request Received</h3>
              <p className="text-stone-600 text-sm">Thank you for your interest in partnering with World Help Foundation. Our leadership will contact you soon.</p>
              <div className="p-3 bg-amber-50 text-amber-900 text-xs font-medium rounded-xl">
                [CONNECT FORM TO EMAIL / DATABASE]
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 bg-blue-900 text-white rounded-xl text-sm font-bold"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-stone-200 pb-4 mb-6">
                <h3 className="text-xl font-bold text-stone-900">Start a Partnership Conversation</h3>
                <p className="text-stone-500 text-xs mt-1">Fill out the details below to discuss collaboration opportunities with {NGO_INFO.name}.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">Organization / Company Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.orgName}
                    onChange={(e) => setFormData({...formData, orgName: e.target.value})}
                    placeholder="Your organization name"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">Contact Person Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
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
                    placeholder="official@company.com"
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
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">Partnership Category</label>
                <select
                  value={formData.partnerType}
                  onChange={(e) => setFormData({...formData, partnerType: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm bg-white"
                >
                  <option value="CSR Partnership">CSR Partnership</option>
                  <option value="Education Partnership">Education Partnership</option>
                  <option value="Community Partnership">Community Partnership</option>
                  <option value="Event Partnership">Event Partnership</option>
                  <option value="Resource Partnership">Resource & Material Partnership</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">Message / Proposal Details *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Share how your organization would like to collaborate..."
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-blue-900 hover:bg-blue-950 text-white font-extrabold text-base shadow-lg transition flex items-center justify-center gap-2"
              >
                START A CONVERSATION <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
}
