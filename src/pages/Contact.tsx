import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="bg-univ-blue py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-white/70 leading-relaxed">
              We're here to help. Whether you have questions about admissions, research, or campus life, feel free to reach out to us.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-univ-blue mb-12">Get in Touch</h2>
              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-univ-blue/5 rounded-full flex items-center justify-center shrink-0 text-univ-blue">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-univ-blue mb-2">Main Campus</h4>
                    <p className="text-gray-600 leading-relaxed">Ggaba Road, Kampala, Uganda<br/>P.O. Box 25412</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-univ-blue/5 rounded-full flex items-center justify-center shrink-0 text-univ-blue">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-univ-blue mb-2">Phone Numbers</h4>
                    <p className="text-gray-600 leading-relaxed">Main Office: +256 414 123 456<br/>Admissions: +256 414 789 012</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-univ-blue/5 rounded-full flex items-center justify-center shrink-0 text-univ-blue">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-univ-blue mb-2">Email Addresses</h4>
                    <p className="text-gray-600 leading-relaxed">General: info@ku.ac.ug<br/>Admissions: admissions@ku.ac.ug</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-univ-blue/5 rounded-full flex items-center justify-center shrink-0 text-univ-blue">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-univ-blue mb-2">Office Hours</h4>
                    <p className="text-gray-600 leading-relaxed">Monday - Friday: 08:00 AM - 05:00 PM<br/>Saturday: 09:00 AM - 01:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-gray-100">
                <h4 className="font-bold text-univ-blue mb-6">Follow Us</h4>
                <div className="flex gap-4">
                  {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-univ-blue hover:bg-univ-blue hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-gray-50 p-8 md:p-12 rounded-sm shadow-xl border border-gray-100">
              <h3 className="text-2xl font-serif font-bold text-univ-blue mb-8 flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-univ-gold" />
                Send us a Message
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm focus:outline-none focus:border-univ-blue transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm focus:outline-none focus:border-univ-blue transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Subject</label>
                  <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm focus:outline-none focus:border-univ-blue transition-colors">
                    <option>General Inquiry</option>
                    <option>Admissions Question</option>
                    <option>Research Collaboration</option>
                    <option>Alumni Relations</option>
                    <option>Career Opportunities</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Message</label>
                  <textarea rows={6} placeholder="How can we help you?" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm focus:outline-none focus:border-univ-blue transition-colors resize-none"></textarea>
                </div>
                <button className="w-full btn-primary flex items-center justify-center gap-2 py-4">
                  SEND MESSAGE
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[500px] bg-gray-200 relative">
        {/* Mock Map Overlay */}
        <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-univ-blue mx-auto mb-4" />
            <h3 className="text-xl font-serif font-bold text-univ-blue">Interactive Map Placeholder</h3>
            <p className="text-gray-600">Ggaba Road, Kampala, Uganda</p>
          </div>
        </div>
        {/* Real Google Maps Embed would go here */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.278278065413!2d32.6136153!3d0.2644444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177db96666666667%3A0x6666666666666666!2sKampala%20University!5e0!3m2!1sen!2sug!4v1620000000000!5m2!1sen!2sug" 
          className="w-full h-full border-0 grayscale opacity-80 hover:grayscale-0 transition-all duration-500"
          allowFullScreen 
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </main>
  );
}
