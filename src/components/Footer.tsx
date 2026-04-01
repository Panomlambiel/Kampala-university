import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-univ-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Mission */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-univ-gold rounded-full flex items-center justify-center font-serif font-bold text-univ-blue text-2xl">
                KU
              </div>
              <h2 className="font-serif font-bold text-xl leading-tight">
                KAMPALA<br/>UNIVERSITY
              </h2>
            </div>
            <p className="text-white/70 leading-relaxed">
              Empowering future leaders of Uganda through excellence in education, research, and community engagement. Founded on the principles of integrity and innovation.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="p-2 bg-white/10 rounded-full hover:bg-univ-gold hover:text-univ-blue transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-6 border-b border-univ-gold/30 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              {['Admissions', 'Academic Calendar', 'Faculty Directory', 'Library', 'Student Portal', 'Alumni Network', 'Careers'].map((link) => (
                <li key={link}>
                  <Link to="#" className="text-white/70 hover:text-univ-gold flex items-center gap-2 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-6 border-b border-univ-gold/30 pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 text-univ-gold shrink-0" />
                <span>Ggaba Road, Kampala, Uganda<br/>P.O. Box 25412</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Phone className="w-5 h-5 text-univ-gold shrink-0" />
                <span>+256 414 123 456</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Mail className="w-5 h-5 text-univ-gold shrink-0" />
                <span>info@ku.ac.ug</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-6 border-b border-univ-gold/30 pb-2 inline-block">Newsletter</h3>
            <p className="text-white/70 mb-4">Stay updated with the latest news and events from Kampala University.</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-sm focus:outline-none focus:border-univ-gold transition-colors"
              />
              <button className="w-full py-3 bg-univ-gold text-univ-blue font-bold rounded-sm hover:bg-white transition-colors">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>© {new Date().getFullYear()} Kampala University. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Accessibility</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
