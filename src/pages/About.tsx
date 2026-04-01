import React from 'react';
import { motion } from 'motion/react';
import { History, Target, Users, Award, ShieldCheck, ChevronRight } from 'lucide-react';

export default function About() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1523050335392-9ae824979603?q=80&w=2070&auto=format&fit=crop" 
          alt="About KU" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-univ-blue/80" />
        <div className="container mx-auto px-4 relative z-10 text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif font-bold mb-4"
          >
            About Kampala University
          </motion.h1>
          <p className="text-xl text-white/70 max-w-2xl">A legacy of excellence, a future of innovation. Discover the heart of Uganda's premier institution.</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="p-12 bg-gray-50 border-l-8 border-univ-blue">
              <div className="w-16 h-16 bg-univ-blue text-white rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-univ-blue mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To provide high-quality education, research, and community service that empowers individuals to contribute meaningfully to national and global development through innovation, integrity, and excellence.
              </p>
            </div>
            <div className="p-12 bg-gray-50 border-l-8 border-univ-gold">
              <div className="w-16 h-16 bg-univ-gold text-univ-blue rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-univ-blue mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be a world-class center of academic excellence, recognized for producing transformative leaders and pioneering research that addresses the challenges of the 21st century.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-univ-blue mb-4">Our History</h2>
            <p className="text-gray-600">Milestones that shaped our journey since inception.</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {[
              { year: '1998', title: 'Foundation', desc: 'Kampala University was founded as a private institution with a vision to revolutionize higher education in Uganda.' },
              { year: '2005', title: 'Charter Status', desc: 'Received the official Charter from the National Council for Higher Education, marking a significant milestone in our growth.' },
              { year: '2012', title: 'Expansion', desc: 'Opened the Faculty of Health Sciences and the School of Engineering, broadening our academic horizons.' },
              { year: '2020', title: 'Digital Transformation', desc: 'Launched the state-of-the-art e-learning portal, ensuring uninterrupted education during global challenges.' },
              { year: '2025', title: 'Global Recognition', desc: 'Ranked among the top 10 universities in East Africa for research impact and innovation.' },
            ].map((milestone, i) => (
              <div key={i} className="flex gap-8 items-start">
                <div className="min-w-[100px] text-3xl font-serif font-bold text-univ-gold border-r-2 border-univ-gold pr-8 py-2">
                  {milestone.year}
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-univ-blue mb-2">{milestone.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-univ-blue mb-4">University Leadership</h2>
            <p className="text-gray-600">Guided by visionaries dedicated to academic excellence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: 'Prof. John Ssekamatte', role: 'Vice Chancellor', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop' },
              { name: 'Dr. Mary Namubiru', role: 'Deputy Vice Chancellor', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop' },
              { name: 'Hon. Badru Kateregga', role: 'Chancellor', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop' },
            ].map((leader, i) => (
              <div key={i} className="group text-center">
                <div className="relative mb-6 overflow-hidden rounded-sm aspect-[4/5]">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-univ-blue/20 group-hover:bg-transparent transition-colors" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-univ-blue">{leader.name}</h3>
                <p className="text-univ-gold font-bold uppercase tracking-widest text-xs mt-2">{leader.role}</p>
                <button className="mt-4 text-sm font-bold text-gray-500 hover:text-univ-blue flex items-center gap-2 mx-auto">
                  View Bio <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
