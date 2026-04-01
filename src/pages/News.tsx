import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, Tag, ArrowRight, Search, Filter } from 'lucide-react';

const newsItems = [
  { 
    id: 1,
    title: 'KU Researchers Discover New Sustainable Energy Solutions', 
    category: 'Research', 
    date: 'Oct 12, 2025', 
    author: 'Dr. Sarah Namono',
    image: 'https://images.unsplash.com/photo-1523050335392-9ae824979603?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'A team of engineers from the Faculty of Science has developed a breakthrough method for solar energy storage that could revolutionize rural electrification...'
  },
  { 
    id: 2,
    title: 'Kampala University Hosts International Moot Court Competition', 
    category: 'University', 
    date: 'Oct 08, 2025', 
    author: 'Prof. David Okello',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'Law students from across East Africa gathered at our Ggaba campus for the annual regional moot court competition focusing on human rights law...'
  },
  { 
    id: 3,
    title: 'New Scholarship Program for STEM Students Launched', 
    category: 'Admissions', 
    date: 'Oct 05, 2025', 
    author: 'Admissions Office',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'In partnership with global tech leaders, we are proud to announce a new full-tuition scholarship program for high-achieving students in STEM fields...'
  },
  { 
    id: 4,
    title: 'Alumni Spotlight: Grace Akello Named Top Young Entrepreneur', 
    category: 'Alumni', 
    date: 'Sept 28, 2025', 
    author: 'Alumni Relations',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
    excerpt: 'Our 2018 Business graduate, Grace Akello, has been recognized for her innovative startup that provides clean water solutions to remote communities...'
  },
];

export default function News() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="bg-univ-blue py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">News & Events</h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Stay informed about the latest research, campus updates, and achievements from the Kampala University community.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Search */}
      <section className="py-8 bg-gray-50 border-b border-gray-200 sticky top-16 z-40">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar w-full md:w-auto">
            {['All News', 'Research', 'University', 'Students', 'Alumni', 'Admissions'].map((cat) => (
              <button key={cat} className="px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all hover:bg-univ-blue hover:text-white bg-white text-gray-600 border border-gray-200">
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search news..." 
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-univ-blue/20"
            />
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {newsItems.map((news, i) => (
              <motion.article 
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col gap-6"
              >
                <div className="relative overflow-hidden rounded-sm aspect-video shadow-lg">
                  <img 
                    src={news.image} 
                    alt={news.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-univ-gold text-univ-blue font-bold text-xs uppercase shadow-lg">
                      {news.category}
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-xs text-gray-500 font-medium">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {news.date}</span>
                    <span className="flex items-center gap-1"><User className="w-3 h-3" /> {news.author}</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-univ-blue group-hover:text-univ-gold transition-colors leading-tight">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {news.excerpt}
                  </p>
                  <button className="text-univ-blue font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                    Read Full Story <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-20 flex justify-center gap-2">
            {[1, 2, 3, '...', 10].map((page, i) => (
              <button key={i} className={`w-10 h-10 rounded-sm flex items-center justify-center font-bold text-sm transition-all ${page === 1 ? 'bg-univ-blue text-white' : 'bg-gray-100 text-gray-600 hover:bg-univ-gold hover:text-univ-blue'}`}>
                {page}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Calendar Preview */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-serif font-bold text-univ-blue mb-4">Upcoming Events</h2>
              <p className="text-gray-600">Mark your calendar for these important university events.</p>
            </div>
            <button className="btn-primary">FULL CALENDAR</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { date: 'OCT 15', title: 'Annual Research Symposium 2026', type: 'Academic' },
              { date: 'OCT 22', title: 'International Students Orientation', type: 'Students' },
              { date: 'NOV 05', title: 'Career Fair & Networking Event', type: 'Careers' },
            ].map((event, i) => (
              <div key={i} className="p-8 bg-white rounded-sm shadow-sm hover:shadow-xl transition-all border-t-4 border-univ-gold">
                <div className="text-univ-blue font-serif font-bold text-3xl mb-4">{event.date}</div>
                <h4 className="text-xl font-serif font-bold text-univ-blue mb-4">{event.title}</h4>
                <span className="px-2 py-1 bg-gray-100 text-gray-500 text-[10px] uppercase font-bold tracking-widest">{event.type}</span>
                <button className="mt-8 w-full py-3 border border-univ-blue text-univ-blue font-bold hover:bg-univ-blue hover:text-white transition-all">
                  RSVP NOW
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
