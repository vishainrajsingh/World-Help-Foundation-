import { useState } from 'react';
import { Heart, ShieldCheck, QrCode, CheckCircle2, Copy } from 'lucide-react';
import { NGO_INFO } from '../data/ngoData';

export function Donate() {
  const [selectedAmount, setSelectedAmount] = useState<number | 'custom'>(1000);
  const [customAmount, setCustomAmount] = useState('');
  const [copied, setCopied] = useState(false);

  const amounts = [500, 1000, 2500, 5000];

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(NGO_INFO.upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-950 to-blue-900 text-white py-16 lg:py-24 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 space-y-4 relative z-10">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-500 text-white text-xs font-bold uppercase tracking-wider">
            Support Our Mission
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Your Support Can Help Build a Better Future
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto">
            "Every contribution can become an opportunity for a child, a helping hand for a family, or a step toward a stronger community."
          </p>
        </div>
      </section>

      {/* Donation Options & Payment Gateway Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Donation Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-stone-200 space-y-8">
            <div>
              <h3 className="text-2xl font-extrabold text-stone-900">Select Donation Amount</h3>
              <p className="text-stone-500 text-xs mt-1">Choose a preset amount or enter a custom contribution.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {amounts.map((amt) => (
                <button
                  key={amt}
                  onClick={() => setSelectedAmount(amt)}
                  className={`py-4 rounded-2xl font-extrabold text-lg transition border-2 ${
                    selectedAmount === amt
                      ? 'bg-amber-500 border-amber-500 text-white shadow-lg shadow-amber-500/20'
                      : 'bg-stone-50 border-stone-200 text-stone-800 hover:border-amber-400'
                  }`}
                >
                  ₹{amt.toLocaleString()}
                </button>
              ))}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">Or Enter Custom Amount (₹)</label>
              <input
                type="number"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount('custom');
                }}
                placeholder="Enter amount in INR"
                className="w-full px-4 py-3.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-lg font-bold"
              />
            </div>

            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-blue-800 shrink-0" />
              <div className="text-xs text-blue-900">
                <span className="font-bold block">Secure & Transparent Contribution</span>
                Registered under Indian Trust Act 1882 (Reg. No. {NGO_INFO.registrationNo}).
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => alert(`Redirecting to secure payment gateway for ₹${selectedAmount === 'custom' ? (customAmount || '500') : selectedAmount}. [CONNECT PAYMENT GATEWAY / UPI]`)}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-extrabold text-lg shadow-xl shadow-orange-600/30 transition flex items-center justify-center gap-2"
              >
                <Heart className="w-5 h-5 fill-white" /> MAKE A DONATION (₹{selectedAmount === 'custom' ? (customAmount || '500') : selectedAmount})
              </button>
            </div>
          </div>

          {/* Right: UPI, Bank Transfer & QR Code */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* UPI & QR Card */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-stone-200 space-y-6 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                <QrCode className="w-4 h-4" /> Direct UPI / QR Code
              </div>

              <div className="bg-stone-100 p-6 rounded-2xl border border-stone-200 max-w-[220px] mx-auto flex flex-col items-center justify-center">
                {/* QR Code Placeholder Image */}
                <div className="w-40 h-40 bg-white rounded-xl shadow-md p-2 flex items-center justify-center border border-stone-300 relative">
                  <div className="absolute inset-2 border-2 border-dashed border-stone-400 rounded-lg flex flex-col items-center justify-center text-center p-2">
                    <span className="text-xs font-bold text-stone-800">SBI Payments QR</span>
                    <span className="text-[10px] text-stone-500 mt-1">{NGO_INFO.name}</span>
                    <span className="text-[9px] text-blue-700 font-semibold mt-1">BHIM • GPay • Paytm • Yono</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-xs text-stone-500 uppercase tracking-wider font-semibold block">Official UPI ID</span>
                <div className="flex items-center justify-center gap-2 bg-stone-50 p-3 rounded-xl border border-stone-200">
                  <code className="text-sm font-bold text-blue-900">{NGO_INFO.upiId}</code>
                  <button
                    onClick={handleCopyUpi}
                    className="p-1.5 rounded-lg bg-white hover:bg-stone-200 text-stone-700 transition shadow-sm"
                    title="Copy UPI ID"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
                {copied && <span className="text-xs text-emerald-600 font-semibold block">Copied to clipboard!</span>}
              </div>
            </div>

            {/* Bank Transfer Details */}
            <div className="bg-blue-950 text-white rounded-3xl p-8 shadow-xl space-y-4">
              <h4 className="text-base font-bold text-amber-300 uppercase tracking-wider">Direct Bank Transfer (NEFT/RTGS)</h4>
              <div className="space-y-2 text-xs text-stone-300">
                <div className="flex justify-between border-b border-blue-900 pb-2">
                  <span className="text-stone-400">Bank Name:</span>
                  <span className="font-semibold text-white">{NGO_INFO.bankDetails.bankName}</span>
                </div>
                <div className="flex justify-between border-b border-blue-900 pb-2">
                  <span className="text-stone-400">Account Name:</span>
                  <span className="font-semibold text-white">{NGO_INFO.bankDetails.accountName}</span>
                </div>
                <div className="flex justify-between border-b border-blue-900 pb-2">
                  <span className="text-stone-400">Account Number:</span>
                  <span className="font-semibold text-amber-300">{NGO_INFO.bankDetails.accountNumber}</span>
                </div>
                <div className="flex justify-between border-b border-blue-900 pb-2">
                  <span className="text-stone-400">IFSC Code:</span>
                  <span className="font-semibold text-amber-300">{NGO_INFO.bankDetails.ifscCode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Branch:</span>
                  <span className="font-semibold text-white">{NGO_INFO.bankDetails.branch}</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Donation Transparency Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-100 rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900">Donation Transparency</h3>
            <p className="text-stone-600 text-sm">How funds are utilized to support our primary social welfare and community programs.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-stone-200 text-center space-y-2 shadow-sm">
              <CheckCircle2 className="w-8 h-8 text-blue-900 mx-auto" />
              <h4 className="font-bold text-stone-900 text-sm">Education Support</h4>
              <p className="text-stone-500 text-xs">Books, notebooks, school kits for children.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-stone-200 text-center space-y-2 shadow-sm">
              <CheckCircle2 className="w-8 h-8 text-amber-600 mx-auto" />
              <h4 className="font-bold text-stone-900 text-sm">Child Support</h4>
              <p className="text-stone-500 text-xs">Welfare & nutritional assistance.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-stone-200 text-center space-y-2 shadow-sm">
              <CheckCircle2 className="w-8 h-8 text-emerald-700 mx-auto" />
              <h4 className="font-bold text-stone-900 text-sm">Community Programs</h4>
              <p className="text-stone-500 text-xs">Health camps & cleanliness drives.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-stone-200 text-center space-y-2 shadow-sm">
              <CheckCircle2 className="w-8 h-8 text-purple-700 mx-auto" />
              <h4 className="font-bold text-stone-900 text-sm">Essential Assistance</h4>
              <p className="text-stone-500 text-xs">Winter blankets & ration kits.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-stone-200 text-center space-y-2 shadow-sm">
              <CheckCircle2 className="w-8 h-8 text-orange-600 mx-auto" />
              <h4 className="font-bold text-stone-900 text-sm">Operations</h4>
              <p className="text-stone-500 text-xs">Field coordination & logistics.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
