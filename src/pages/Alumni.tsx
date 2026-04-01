import React from 'react';
import { motion } from 'motion/react';
import { Users, Award, Heart, Globe, Search, ArrowRight, Mail } from 'lucide-react';

export default function Alumni() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative h-[500px] flex items-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop" 
          alt="Alumni" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-univ-blue/70" />
        <div className="container mx-auto px-4 relative z-10 text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif font-bold mb-4"
          >
            Alumni Network
          </motion.h1>
          <p className="text-xl text-white/70 max-w-2xl">A community of over 50,000 graduates making an impact across the globe. Stay connected, give back, and grow with us.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-univ-gold text-univ-blue">
        <div className="container mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { label: 'Graduates', value: '50,000+' },
            { label: 'Countries', value: '45+' },
            { label: 'Regional Chapters', value: '12' },
            { label: 'Mentors', value: '1,200+' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-serif font-bold mb-1">{stat.value}</div>
              <div className="text-xs uppercase font-bold tracking-widest opacity-70">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Alumni Directory */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-serif font-bold text-univ-blue mb-6">Stay Connected</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our alumni directory allows you to find and reconnect with former classmates, search for mentors in your field, and build professional networks.
              </p>
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search alumni by name, class, or location..." 
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-univ-blue/20"
                />
              </div>
              <button className="btn-primary">ACCESS DIRECTORY</button>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-sm border-l-4 border-univ-gold">
                  <Users className="w-8 h-8 text-univ-blue mb-4" />
                  <h4 className="font-bold text-univ-blue mb-2">Regional Chapters</h4>
                  <p className="text-sm text-gray-600">Join a local chapter and attend networking events in your city.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-sm border-l-4 border-univ-blue">
                  <Award className="w-8 h-8 text-univ-gold mb-4" />
                  <h4 className="font-bold text-univ-blue mb-2">Alumni Awards</h4>
                  <p className="text-sm text-gray-600">Recognizing the outstanding achievements of our graduates.</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-gray-50 p-6 rounded-sm border-l-4 border-univ-blue">
                  <Heart className="w-8 h-8 text-univ-gold mb-4" />
                  <h4 className="font-bold text-univ-blue mb-2">Giving Back</h4>
                  <p className="text-sm text-gray-600">Support the next generation of KU students through donations.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-sm border-l-4 border-univ-gold">
                  <Globe className="w-8 h-8 text-univ-blue mb-4" />
                  <h4 className="font-bold text-univ-blue mb-2">Global Network</h4>
                  <p className="text-sm text-gray-600">Connect with KU alumni working in top global organizations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-univ-blue mb-4">Success Stories</h2>
            <p className="text-gray-600">Highlighting the impact of our graduates across the world.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Dr. Sarah Namono', role: 'Medical Researcher', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop', story: 'Sarah is leading a team of researchers in developing sustainable health solutions for rural communities in East Africa.' },
              { name: 'David Okello', role: 'Tech Entrepreneur', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop', story: 'David founded one of Ugandas most successful fintech startups, providing digital banking solutions to thousands.' },
              { name: 'Grace Akello', role: 'Human Rights Lawyer', image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop', story: 'Grace is an advocate for social justice and has successfully represented marginalized communities in international courts.' },
            ].map((alumni, i) => (
              <div key={i} className="group bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={alumni.image} 
                    alt={alumni.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-univ-blue mb-2">{alumni.name}</h3>
                  <p className="text-univ-gold font-bold uppercase tracking-widest text-xs mb-4">{alumni.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">"{alumni.story}"</p>
                  <button className="text-univ-blue font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                    Read Full Story <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentorship */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-univ-blue rounded-sm p-12 md:p-20 text-white flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-2/3">
              <h2 className="text-4xl font-serif font-bold mb-6">Alumni Mentorship Program</h2>
              <p className="text-xl text-white/70 leading-relaxed mb-8">
                Share your experience and guide the next generation of KU leaders. Our mentorship program connects alumni with current students for professional guidance and support.
              </p>
              <div className="flex gap-4">
                <button className="btn-secondary">BECOME A MENTOR</button>
                <button className="px-8 py-3 border border-white text-white font-bold hover:bg-white hover:text-univ-blue transition-all">FIND A MENTOR</button>
              </div>
            </div>
            <div className="lg:w-1/3 text-center">
              <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-16 h-16 text-univ-gold" />
              </div>
              <p className="font-bold text-univ-gold">Join the Conversation</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
