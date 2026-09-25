import { Heart, MapPin, Phone, Mail, ShieldCheck, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import { NGO_INFO } from '../data/ngoData';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export function Footer({ setCurrentPage }: FooterProps) {
  const handleNav = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-blue-950 text-stone-300 pt-16 pb-20 md:pb-16 border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-blue-900/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-white shadow-lg">
                <Heart className="w-6 h-6 fill-white text-white" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white tracking-tight">{NGO_INFO.name}</h3>
                <span className="text-xs text-amber-300 font-medium">Dhanbad, Jharkhand, India</span>
              </div>
            </div>
            
            <p className="text-stone-300 text-sm leading-relaxed max-w-sm">
              "Together, let's build a future where every child gets a chance to learn, grow and dream. Working toward uplifting lives through compassion, education, and community support."
            </p>

            <div className="p-3.5 rounded-xl bg-blue-900/50 border border-blue-800 text-xs space-y-1.5 max-w-sm">
              <div className="flex items-center gap-2 text-amber-300 font-semibold">
                <ShieldCheck className="w-4 h-4" /> Legal Status & Registration
              </div>
              <p className="text-stone-300">Reg. No.: {NGO_INFO.registrationNo}</p>
              <p className="text-stone-300">{NGO_INFO.establishedUnder}</p>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 tracking-wide uppercase text-xs">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-amber-300 transition">About Us</button>
              </li>
              <li>
                <button onClick={() => handleNav('work')} className="hover:text-amber-300 transition">Our Work & Programs</button>
              </li>
              <li>
                <button onClick={() => handleNav('impact')} className="hover:text-amber-300 transition">Our Social Impact</button>
              </li>
              <li>
                <button onClick={() => handleNav('stories')} className="hover:text-amber-300 transition">Stories That Inspire</button>
              </li>
              <li>
                <button onClick={() => handleNav('gallery')} className="hover:text-amber-300 transition">Photo Gallery</button>
              </li>
              <li>
                <button onClick={() => handleNav('news')} className="hover:text-amber-300 transition">News & Updates</button>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 tracking-wide uppercase text-xs">Get Involved</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleNav('volunteer')} className="hover:text-amber-300 transition">Become a Volunteer</button>
              </li>
              <li>
                <button onClick={() => handleNav('partner')} className="hover:text-amber-300 transition">Partner With Us (CSR)</button>
              </li>
              <li>
                <button onClick={() => handleNav('donate')} className="hover:text-amber-300 transition font-semibold text-amber-300">Make a Donation</button>
              </li>
              <li>
                <button onClick={() => handleNav('faq')} className="hover:text-amber-300 transition">Frequently Asked Questions</button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-amber-300 transition">Contact Us</button>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 tracking-wide uppercase text-xs">Connect & Legal</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-300 shrink-0 mt-1" />
                <span className="text-stone-300 text-xs leading-relaxed">{NGO_INFO.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-300 shrink-0" />
                <span className="text-stone-300 text-xs">{NGO_INFO.phones[0]}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-300 shrink-0" />
                <span className="text-stone-300 text-xs break-all">{NGO_INFO.emails[0]}</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-blue-900/60">
              <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Legal Policies</h5>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-stone-400">
                <button onClick={() => handleNav('privacy')} className="hover:text-amber-300 transition">Privacy Policy</button>
                <button onClick={() => handleNav('terms')} className="hover:text-amber-300 transition">Terms & Conditions</button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-400">
          <p>© 2026 World Help Foundation. All Rights Reserved. Registered under Indian Trust Act 1882.</p>
          
          <div className="flex items-center gap-4">
            <a href={NGO_INFO.socialLinks.facebook} className="p-2 rounded-lg bg-blue-900/60 hover:bg-amber-500 hover:text-white transition" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href={NGO_INFO.socialLinks.instagram} className="p-2 rounded-lg bg-blue-900/60 hover:bg-amber-500 hover:text-white transition" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href={NGO_INFO.socialLinks.youtube} className="p-2 rounded-lg bg-blue-900/60 hover:bg-amber-500 hover:text-white transition" aria-label="YouTube">
              <Youtube className="w-4 h-4" />
            </a>
            <a href={NGO_INFO.socialLinks.linkedin} className="p-2 rounded-lg bg-blue-900/60 hover:bg-amber-500 hover:text-white transition" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
