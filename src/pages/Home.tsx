import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import { ArrowRight, Calendar, BookOpen, Users, Award, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />

      {/* Featured Programs */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-serif font-bold text-univ-blue mb-4">Academic Excellence</h2>
            <p className="text-gray-600 text-lg">Explore our diverse range of programs designed to prepare you for a successful career in a globalized world.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Undergraduate', icon: BookOpen, desc: 'Over 40 degree programs across 8 faculties, focusing on practical skills and theoretical depth.' },
              { title: 'Postgraduate', icon: Award, desc: 'Advanced research and professional degrees for those looking to specialize and lead in their fields.' },
              { title: 'Online Learning', icon: ExternalLink, desc: 'Flexible, high-quality education accessible from anywhere, powered by our modern e-learning portal.' },
            ].map((program, i) => (
              <motion.div 
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 border border-gray-100 rounded-sm hover:shadow-2xl transition-all hover:-translate-y-2 bg-white"
              >
                <div className="w-16 h-16 bg-univ-blue/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-univ-blue group-hover:text-white transition-colors">
                  <program.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4">{program.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{program.desc}</p>
                <button className="text-univ-blue font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-serif font-bold text-univ-blue mb-4">News & Events</h2>
              <p className="text-gray-600">Stay connected with the latest happenings at Kampala University.</p>
            </div>
            <button className="btn-primary">VIEW ALL NEWS</button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main News Card */}
            <div className="lg:col-span-2 group relative overflow-hidden rounded-sm shadow-lg h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1523050335392-9ae824979603?q=80&w=2070&auto=format&fit=crop" 
                alt="University News" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-univ-blue via-univ-blue/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <span className="px-3 py-1 bg-univ-gold text-univ-blue font-bold text-xs uppercase mb-4 inline-block">Research</span>
                <h3 className="text-3xl font-serif font-bold mb-4">KU Researchers Discover New Sustainable Energy Solutions</h3>
                <p className="text-white/80 mb-6 max-w-xl">A team of engineers from the Faculty of Science has developed a breakthrough method for solar energy storage...</p>
                <button className="flex items-center gap-2 font-bold hover:text-univ-gold transition-colors">
                  Read Full Story <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Event List */}
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-bold text-univ-blue mb-6 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-univ-gold" />
                Upcoming Events
              </h3>
              {[
                { date: 'OCT 15', title: 'Annual Research Symposium 2026', time: '09:00 AM - 04:00 PM' },
                { date: 'OCT 22', title: 'International Students Orientation', time: '10:00 AM - 02:00 PM' },
                { date: 'NOV 05', title: 'Career Fair & Networking Event', time: '11:00 AM - 05:00 PM' },
                { date: 'NOV 12', title: 'Public Lecture: Future of AI in Africa', time: '02:00 PM - 04:00 PM' },
              ].map((event) => (
                <div key={event.title} className="flex gap-4 p-4 bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow border-l-4 border-univ-gold">
                  <div className="flex flex-col items-center justify-center min-w-[60px] text-univ-blue">
                    <span className="text-xs font-bold uppercase">{event.date.split(' ')[0]}</span>
                    <span className="text-2xl font-bold">{event.date.split(' ')[1]}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 hover:text-univ-blue cursor-pointer transition-colors">{event.title}</h4>
                    <p className="text-xs text-gray-500 mt-1">{event.time}</p>
                  </div>
                </div>
              ))}
              <button className="w-full py-3 border border-univ-blue text-univ-blue font-bold hover:bg-univ-blue hover:text-white transition-all">
                VIEW FULL CALENDAR
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-univ-blue text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Voices of KU</h2>
            <p className="text-white/60">Hear from our students and alumni about their journey at Kampala University.</p>
          </div>

          <div className="flex gap-8 overflow-x-auto pb-8 snap-x no-scrollbar">
            {[
              { name: 'Sarah Namono', role: 'Medical Student', quote: 'The clinical exposure I received at KU is unmatched. The faculty are not just teachers, they are mentors who truly care about our growth.' },
              { name: 'David Okello', role: 'Alumni, Software Engineer', quote: 'KU provided me with the technical foundation and the leadership skills needed to excel in the global tech industry.' },
              { name: 'Grace Akello', role: 'Law Student', quote: 'The moot court competitions and legal clinics at KU have prepared me for the realities of the legal profession in Uganda.' },
              { name: 'John Musoke', role: 'Business Student', quote: 'The entrepreneurship hub at KU helped me turn my idea into a thriving startup even before I graduated.' },
            ].map((t, i) => (
              <div key={i} className="min-w-[300px] md:min-w-[400px] bg-white/5 p-8 rounded-sm border border-white/10 snap-center">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-univ-gold rounded-full flex items-center justify-center text-univ-blue font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold">{t.name}</h4>
                    <p className="text-xs text-white/50">{t.role}</p>
                  </div>
                </div>
                <p className="italic text-lg text-white/80 leading-relaxed">"{t.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-univ-gold">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-univ-blue mb-4">Ready to Start Your Journey?</h2>
            <p className="text-univ-blue/80 text-lg">Applications for the 2026 academic year are now open. Join us and shape your future.</p>
          </div>
          <div className="flex gap-4">
            <button className="btn-primary px-10 py-4 shadow-xl">APPLY NOW</button>
            <button className="px-10 py-4 border-2 border-univ-blue text-univ-blue font-bold hover:bg-univ-blue hover:text-white transition-all">REQUEST INFO</button>
          </div>
        </div>
      </section>
    </main>
  );
}
